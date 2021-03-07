const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

require('dotenv').config();

const middlewares = require('./middlewares');
const auth = require('./auth');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use('/auth', auth);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
