const express = require('express');

const router = express.Router();

const db = require('../db/connection');

// GET all employees
router.get('/', (req, res) => {
  db.query('SELECT * FROM employeeSystem.employees', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// UPDATE NEW USERNAME
router.put('/update', (req, res) => {
  const id = req.body.id;
  const username = req.body.username;
  db.query(
    'UPDATE employees SET username = ? WHERE id = ?',
    [username, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// DELETE employee
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM employees WHERE id = ?', id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
