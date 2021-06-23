const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	// console.log('the home page')
	// this variable is provided by node 
	// console.log(__dirname);
	// res.send('this is the home page');
	res.sendFile(__dirname + '/views/home-page.html');
});


app.get('/about', function (req, res) {
	// console.log('the home page')
	res.sendFile(__dirname + '/views/about.html');
});

app.get('/works', function (req, res) {
	// console.log('the home page')
	res.sendFile(__dirname + '/views/works.html');
});

app.get('/photo-gallery', function (req, res) {
	// console.log('the home page')
	res.sendFile(__dirname + '/views/photo-gallery.html');
});

app.listen(3000, function () {
	console.log('Server listening');
});
