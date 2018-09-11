'use strict';

const express = require('express');
const router = express.Router();

/* GET users page. */

router.get('/', function(req, res, next) {
  res.send('/gallery photo gallery');
});

module.exports = router;