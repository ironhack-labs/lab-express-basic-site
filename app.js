// Require Express and HandleBars
const express = require('express');
//const hbs = require('hbs');
const path = require('path');

// Express server handling requests and responses
const app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/home', (req, res) => res.render('home'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/works', (req, res) => res.render('works'));
app.get('/about', (req, res) => res.render('about'));

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'));