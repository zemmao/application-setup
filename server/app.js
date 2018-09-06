'use strict';

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const jsend = require('jsend').middleware;
const router = require('./router');
require('express-async-errors');

const app = express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(jsend);

app.use('/api/v1', router);
app.use((req, res, next) => res.status(404).end());

app.use((err, req, res, next) => {
  let { status, message } = err;

  if (!status) status = 500;
  if (!message) {
    res.status(500).end();
  } else {
    res.status(status).jsend.error(message);
  }

  console.error(err);
});

module.exports = app;
