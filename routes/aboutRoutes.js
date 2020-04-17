const express = require('express');
const router = new express.Router();

const axios = require('axios');

async function getDataAndRender(rep) {
	try {
		const data = await axios
			.get('https://www.episodate.com/api/show-details?q=the-office-us')
			.then((response) => {
				return response.data.tvShow;
			})
			.catch(function (error) {
				console.log(error);
			});
		delete data.episodes;
		rep.render('about', {
			isAbout: true,
			title: 'About',
			css: 'about',
			data: data,
		});
	} catch (error) {
		console.log(error);
	}
}

router.get('/', function (request, response) {
	getDataAndRender(response);
});

module.exports = router;
