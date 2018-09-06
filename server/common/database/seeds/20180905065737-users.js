'use strict';

const { role } = require('../../../../common/config');

const now = Date.now();
const users = [{
  first_name: 'Admin',
  last_name: 'Example',
  email: 'admin@test.org',
  password: 'test123',
  role: role.ADMIN
}, {
  first_name: 'Student',
  last_name: 'Example',
  email: 'student@test.org',
  password: 'test123',
  role: role.STUDENT
}];

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('user', users, {}),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('user', null, {})
};
