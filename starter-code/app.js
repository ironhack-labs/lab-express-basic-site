const express = require('express');

const app = express();
app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', (req, res, next) => {
	let data = {
		name     : 'Edgar',
		bootcamp : 'IronHack WebDev',
		age      : 25
	};

	res.render('home', data);
});

app.get('/about', (req, res, next) => {
	let data = {
		name     : 'Edgar',
		bootcamp : 'IronHack WebDev',
		age      : 25
	};

	res.render('about', data);
});

app.get('/gallery', (req, res, next) => {
	res.render('gallery');
});

app.listen(3000, () => {
	console.log('My first app listening on port 3000!');
});
