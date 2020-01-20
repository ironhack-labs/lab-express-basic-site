// import modules
const express = require('express');
const hbs = require('hbs');

// global variables
const app = express();
const people = [
	{
		name: 'Ellie',
		age: 14,
		status: 'alive',
		fictional: true,
		img: 'ellie.jpeg'
	},
	{
		name: 'Joel',
		age: 'uknown',
		status: 'alive',
		fictional: true,
		img: 'joel.jpg'
	},
	{
		name: 'Ashely Johnson',
		age: 36,
		appearances: [ 'Blindstop', 'Critical Role', 'The Last of Us: Left Behind' ],
		fictional: false
	},
	{
		name: 'Troy Baker',
		age: 43,
		appearances: [ 'BioShock Infinite', "Uncharted 4: A Thief's End", 'Death Stranding' ],
		fictional: false
	}
];

// App setup
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);
app.use('/static', express.static(`${__dirname}/public`));
hbs.registerPartials(`${__dirname}/views/partials`);

// Routes
app.get('/', (req, res) => {
	res.render('index');
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/gallery', (req, res) => {
	res.render('gallery');
});

app.get('/cast', (req, res) => {
	res.render('cast', { people: people.filter(person => !person.fictional) });
});

app.get('/characters', (req, res) => {
	res.render('characters', { people: people.filter(person => person.fictional) });
});

// Start server
const port = 3000;
app.listen(port, () => {
	console.log(`server started on port ${port}`);
});
