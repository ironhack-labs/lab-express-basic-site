'use strict'

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tartar Sauce AKA Grumpy Cat' });
});

module.exports = router;
