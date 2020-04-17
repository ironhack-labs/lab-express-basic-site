const express = require('express');
const router = new express.Router();
const axios = require('axios');

async function getDataAndRender(rep) {
	try {
		const data = {};
		data.images = await axios
			.get('https://www.episodate.com/api/show-details?q=the-office-us')
			.then((response) => {
				return response.data.tvShow.pictures;
			})
			.catch(function (error) {
				console.log(error);
			});
		rep.render('gallery', {
			isGallery: true,
			title: 'gallery',
			images: data.images,
			css: 'gallery',
		});
	} catch (error) {
		console.log(error);
	}
}

router.get('/', function (req, rep, next) {
	getDataAndRender(rep);
});

module.exports = router;
