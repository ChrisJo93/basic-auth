const express = require('express');
const pool = require('./pool');
const router = express.Router();

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

module.exports = router;
