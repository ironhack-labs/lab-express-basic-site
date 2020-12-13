const express = require('express');

const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');

const app = express();

app.set('view engine', 'hbs');

app.set('views', __dirname + '/views');

app.locals.pageTitle = 'The Bill Gates Blog';

app.use(express.static('public'));

app.get('/home', (request, response) => {
  response.render('home', { pageTitle: 'Home' });
});

app.get('/about', (request, response) => {
  response.render('about', { pageTitle: 'About' });
});

app.get('/work', (request, response) => {
  response.render('work', { pageTitle: 'Work' });
});

app.get('/gallery', (request, response) => {
  response.render('gallery', { pageTitle: 'Photo Gallery' });
});

app.listen(3000);
