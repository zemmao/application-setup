'use strict';

const { promisify } = require('util');
const app = require('./app');
const database = require('./common/database');

const runServer = promisify(app.listen.bind(app));

database.initialize()
  .then(() => console.log('DB initialized'))
  .then(() => runServer(process.env.PORT, process.env.IP))
  .then(() => console.log('Server listening on port', process.env.PORT))
  .catch(err => console.log(err));
