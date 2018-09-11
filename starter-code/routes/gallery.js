'use strict'

const express = require('express');
const router = express.Router();

/* GET gallery listing. */
router.get('/', function(req, res, next) {
  res.render('gallery', {title:'Grumpy Cat Gallery'});
});

module.exports = router;
