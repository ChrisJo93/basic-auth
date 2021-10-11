const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const encryptLib = require('../modules/encryption');
const userStrategy = require('../strategies/user.strategy');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

router.get('/get', (req, res) => {
  //returns all users in database regardless of auth
  const queryCred = `SELECT * FROM "user";`;

  pool
    .query(queryCred)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error fetching user creds, ${error}`);
      res.sendStatus(500);
    });
});

router.post('/register', (req, res) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const queryCred = `INSERT INTO "user" (username, password) VALUES ($1, $2) RETURNING id;`;

  pool
    .query(queryCred, [username, password])
    .then(() => res.sendStatus(201))
    .catch((error) => {
      console.log(`User Registration error, ${error}`);
      res.sendStatus(500);
    });

  router.post('/login', userStrategy.authenticate('local'), (req, res) => {
    res.sendStatus(200);
  });
});

router.post('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
