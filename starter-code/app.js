const express = require('express');
const hbs = require('hbs');
const app = express();

const path = require('path');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res, next) => {
  res.render('index')
});

app.get('/about', (req, res, next) => {
  res.render('about');
});

app.get('/photo_gallery', (req, res, next) => {
  res.render('photo_gallery');
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});