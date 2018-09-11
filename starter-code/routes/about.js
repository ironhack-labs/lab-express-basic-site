'use strict'

const express = require('express');
const router = express.Router();

/* GET about listing. */
router.get('/', function(req, res, next) {
  res.render('about', {title:'About Tardar Sauce'});
});

module.exports = router;
