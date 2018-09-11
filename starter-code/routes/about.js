'use strict';

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('about', {title : 'About Me'});
});

module.exports = router;
