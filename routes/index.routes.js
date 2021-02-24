const express = require('express');

const { albuns } = require('../data');

const router = express.Router();

router.get('/home', (request, response) => {
	response.render('index');
});

router.get('/about', (request, response) => {
	response.render('about');
});

router.get('/photo-gallery', (request, response) => {
	response.render('photo_galery');
});

router.get('/works', (request, response) => {
	response.render('works', { albuns });
});

module.exports = router;