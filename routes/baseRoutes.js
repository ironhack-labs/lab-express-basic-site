const express = require('express');
const router = new express.Router();

router.get('/', (req, res) => {
  res.render('home.hbs', {
    title: 'Home',
  });
});

router.get('/about', (req, res) => {
  res.render('about.hbs', {
    title: 'About',
  });
});

router.get('/works', (req, res) => {
  res.render('works.hbs', {
    title: 'Works',
  });
});

router.get('/gallery', (req, res) => {
  res.render('gallery.hbs', {
    title: 'Gallery',
  });
});

module.exports = router;
