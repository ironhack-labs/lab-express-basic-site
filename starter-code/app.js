// core modules
const express = require('express');
const hbs = require('hbs');

// own modules
const people = require('./public/js/people');

// App setup
const app = express();
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);
app.use('/static', express.static(`${__dirname}/public`));
hbs.registerPartials(`${__dirname}/views/partials`);

// Routes
app.get('/', (req, res) => {
	res.render('index', { pageTitle: 'Home' });
});

app.get('/about', (req, res) => {
	res.render('about', { pageTitle: 'The Last of Us' });
});

app.get('/gallery', (req, res) => {
	res.render('galleryHome', { pageTitle: 'Cast & Characters' });
});

app.get('/cast', (req, res) => {
	res.render('gallery', { people: people.filter(person => !person.fictional), pageTitle: 'Cast' });
});

app.get('/characters', (req, res) => {
	res.render('gallery', { people: people.filter(person => person.fictional), pageTitle: 'Characters' });
});

// Start server
const port = 3000;
app.listen(port, () => {
	console.log(`server started on port ${port}`);
});
