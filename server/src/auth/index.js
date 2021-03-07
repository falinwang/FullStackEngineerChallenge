const express = require('express');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'employeeSystem',
});

const router = express.Router();

const schema = Joi.object({
  username: Joi.string().min(2).max(30).required(),

  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'org'] },
    })
    .required(),

  password: Joi.string().min(6).required(),
});

// any router in here is pre-pended with /auth
router.get('/signup', (req, res) => {
  res.json({
    message: 'auth, 🔐',
  });
});

// POST /auth/signup

router.post('/signup', (req, res, next) => {
  const result = schema.validate(req.body);
  if (result.error === undefined) {
    const { username, email, password } = req.body;
    const hash = bcrypt.hashSync(password);

    db.query(
      'INSERT INTO employees (username, email, password) VALUES (?,?,?)',
      [username, email, hash],
      (err, result) => {
        if (err) {
          next(err);
        } else {
          res.send('Value Inserted');
        }
      }
    );
  } else {
    next(result.error);
  }
});

module.exports = router;
