const express = require('express');

const Joi = require('joi');

const router = express.Router();

const schema = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net', 'org'] },
  }),

  password: Joi.string().min(6).required(),

  repeat_password: Joi.ref('password'),
}).with('password', 'repeat_password');

// any router in here is pre-pended with /auth

router.get('/', (req, res) => {
  res.json({
    message: 'auth, 🔐',
  });
});

// POST /auth/signup

router.post('/signup', (req, res) => {
  console.log(req.body);
  const value = schema.validate(req.body);
  res.json(value);
});

module.exports = router;
