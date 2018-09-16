'use strict';

const express = require('express');
const user = require('./user');

const router = express.Router();
router.use('/ping', (req, res) => res.jsend.success(null));
router.use(user.path, user.router);

module.exports = router;
