const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
  res.render('home');
});

router.get('/about', (req, res, next) => {
    res.render('about');
  });

  router.get('/gallery', (req, res, next) => {
    res.render('gallery');
  });