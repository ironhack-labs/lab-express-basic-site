const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('about'));
app.get('/projects', (req, res) => res.render('projects'));
app.get('/contact', (req, res) => res.render('contact'));

app.listen(3000, () => console.log('My first app listening on port 3000!'));
