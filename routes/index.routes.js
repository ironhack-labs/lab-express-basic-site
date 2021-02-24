const express = require('express');

const { movies } = require('../data');

const router = express.Router();

router.get('/', (request, response) => {
	response.render('index');
});

router.get('/about', (request, response) => {
	response.render('about-page');
});

router.get('/photo-gallery', (request, response) => {
	response.render('photo-gallery-page');
});

router.get('/works', (request, response) => {
	response.render('works-page', { movies });
});

module.exports = router;
