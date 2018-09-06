'use strict';

const { 'migrations-path': migrationsPath } = require('../../../.sequelizerc');
const config = require('./config');
const forEach = require('lodash/forEach');
const invoke = require('lodash/invoke');
const Sequelize = require('sequelize');
const User = require('../../user/user.model');
const Umzug = require('umzug');

const isProduction = process.env.NODE_ENV === 'production';
const sequelize = new Sequelize(config.url, config);
const { Sequelize: { DataTypes } } = sequelize;

const defineModel = Model => {
  const fields = invoke(Model, 'fields', DataTypes) || {};
  const hooks = invoke(Model, 'hooks') || {};
  const options = invoke(Model, 'options') || {};
  Model.init(fields, { sequelize, hooks, ...options });
};

const models = {
  User: defineModel(User)
};

forEach(models, model => {
  invoke(model, 'associate', models);
});

function initialize() {
  const umzug = new Umzug({
    logging: message => console.log('[Migration] ', message),
    storage: 'sequelize',
    storageOptions: {
      sequelize,
      tableName: config.migrationStorageTableName
    },
    migrations: {
      params: [sequelize.getQueryInterface(), Sequelize],
      path: migrationsPath
    }
  });

  return Promise.resolve(!isProduction && umzug.up())
    .then(result => umzug.executed())
    .then(migrations => {
      const files = migrations.map(it => it.file);
      if (!files.length) return;
      console.log('Executed migrations ', files);
    });
}

module.exports = {
  sequelize,
  initialize
};
