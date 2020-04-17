const express = require('express');
const router = new express.Router();

router.get('/', function (request, response) {
	response.render('index', {
		isHome: true,
		title: 'Home',
	});
});

module.exports = router;
