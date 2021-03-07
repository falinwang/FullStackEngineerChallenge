const express = require('express');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const db = require('../db/connection');

const router = express.Router();

// Validate the input using Joi
const schema = Joi.object({
  username: Joi.string().min(2).max(30).required(),

  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'org'] },
    })
    .required(),

  password: Joi.string().min(6).required(),

  repeat_password: Joi.ref('password'),
});

// any router in here is pre-pended with /auth
router.get('/', (req, res) => {
  res.json({
    message: 'auth, 🔐',
  });
});

// POST /auth/signup
router.post('/signup', (req, res, next) => {
  const value = schema.validate(req.body);
  if (value.error === undefined) {
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
    next(value.error);
  }
});

module.exports = router;
