const express = require('express');
const app = express();

app.set('view engine', 'hbs'); // set handlebars

// this is needed to register the public folder
// containing all the assets so that it is accessible in the browser
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	// res.send('this is the home page');
	res.sendFile(__dirname + '/views/home.html'); // __dirname is provided by node 
});

app.get('/about', (req, res) => {
	// res.sendFile(__dirname + '/views/about.html');
	const name = 'Alex';
	res.render('about', { name: name });
});

app.get('/works', (req, res) => {
	// res.sendFile(__dirname + '/views/works.html');
	const works = '<script src="http://gist-it.appspot.com/http://github.com/alexandreoliv/lab-express-basic-site/blob/master/app.js"></script>';
	res.render('works', { works: works });
});

app.get('/gallery', (req, res) => {
	// res.sendFile(__dirname + '/views/gallery.html');
	const screenshots = [
			`<div id="image">
                <img src="/images/dystopia.png">
            </div>`,
			`<div id="image">
                <img src="/images/memory.png">
            </div>`,
            `<div id="image">
                <img src="/images/pizza.png">
            </div>`,
            `<div id="image">
                <img src="/images/chronometer.png">
            </div>`
		];

	res.render('gallery', { screenshots: screenshots });
});

app.listen(3000, function () {
	console.log('Server listening');
});