const express = require('express');
const pool = require('./modules/pool');
const router = express.Router();
const encryptLib = require('./modules/encryption');

router.get('/', (req, res) => {
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
});

module.exports = router;
