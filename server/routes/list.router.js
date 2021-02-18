const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// POST Route
router.post('/', (req, res) => {
  const item = req.body;
  const sqlText = `INSERT INTO "shopping_list" ("name", "quantity", "unit" ) 
                   VALUES ($1, $2, $3)`;
  pool
    .query(sqlText, [item.name, item.quantity, item.unit])
    .then((result) => {
      console.log(`Added item to the shopping list`, item);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});
// GET route:
router.get('/', (req, res) => {
  const sqlText =
    'SELECT * FROM "shopping_list" ORDER BY "isPurchased", "name" DESC;';
  pool
    .query(sqlText)
    .then((result) => {
      console.log('Got stuff from db!', result);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error making db query:', sqlText, error);
      res.sendStatus(500);
    });
}); // end GET

module.exports = router;
