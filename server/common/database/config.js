'use strict';

require('dotenv').config();

module.exports = {
  url: process.env.DATABASE_URI,
  dialect: 'postgres',
  migrationStorageTableName: 'sequelize_meta'
};
