const express = require('express');
const app = express();
const path = require('path');

const hbs = require('hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
hbs.registerPartials('HERE WE SET THE LOCATION OF OUR PARTIALS');
hbs.registerPartials(__dirname + '/views/partials');


app.get('/', (request, response) => {
	console.log('first connection made!');
	response.render('home.hbs');
});

// Make everything inside of public/ available
app.use(express.static('public'));

app.get('/about', (request, response, next) => {
  response.render('about');
});

app.get('/gallery', (request, response, next) => {
	response.render('gallery');
});

app.listen(3000, () => {
	console.log('My first app listening @ http://localhost:3000 !');
});
