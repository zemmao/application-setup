'use strict';

module.exports = {
  auth: {
    scheme: process.env.AUTH_JWT_SCHEME || 'JWT',
    secret: process.env.AUTH_JWT_SECRET
  }
};
