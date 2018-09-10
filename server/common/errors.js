'use strict';

const httpError = require('http-errors');

function createError(status = 400, message = 'An error has occured') {
  return Promise.reject(httpError(status, message));
}

module.exports = createError;
