'use strict';

const createError = require('../errors');
const { UNAUTHORIZED } = require('http-status');

function permit(...allowed) {
  return ({ user }, _, next) => {
    if (user && allowed.includes(user.role)) return next();
    return createError(UNAUTHORIZED, 'Access restricted!');
  };
}

module.exports = {
  permit
};
