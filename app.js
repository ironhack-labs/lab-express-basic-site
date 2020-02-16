const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');

app.use(express.static('public'));

const data = {
  today: new Date().toLocaleString('en-US'),
};

app.get('/', (req, res) => res.render('home', data));
app.get('/about', (req, res) => res.render('about'));
app.get('/works', (req, res) => res.render('works'));

app.listen(port);
