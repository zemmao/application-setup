'use strict';

module.exports = {
  ip: process.env.IP,
  port: process.env.PORT,
  auth: {
    scheme: process.env.AUTH_JWT_SCHEME || 'JWT',
    secret: process.env.AUTH_JWT_SECRET
  }
};
