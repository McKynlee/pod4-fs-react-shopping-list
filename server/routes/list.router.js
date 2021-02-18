const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// GET route:
router.get('/', (req, res) => {
  const sqlText =
    'SELECT * FROM "shopping_list" ORDER BY "isPurchased", "name" DESC;';
  pool.query(sqlText)
    .then(result => {
      console.log('Got stuff from db!', result);
      res.send(result.rows);
    })
    .catch(error => {
      console.log('Error making db query:', sqlText, error);
      res.sendStatus(500);
    })
})// end GET

module.exports = router;