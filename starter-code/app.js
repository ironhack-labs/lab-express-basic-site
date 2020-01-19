const express = require('express');
const hbs = require('hbs');
const app = express();

// App setup
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);
app.use('/static', express.static(`${__dirname}/public`));

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

// Start server
const port = 3000;
app.listen(port, () => {
	console.log(`server started on port ${port}`);
});
