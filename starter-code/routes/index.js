const express = require('express');
const router  = express.Router();
const data = require('../galleryImages.json')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/about', (req, res, next) => {
  res.render('about');
});
router.get('/gallery', (req, res, next) => {
  res.render('gallery',{data:data})
});

module.exports = router;
