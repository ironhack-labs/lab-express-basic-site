const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main');

app.use(express.static('public'));

app.get('/about', (req, res, next) => {
  res.render('about');
  next();
});

app.get('/gallery', (req, res, next) => {
  res.render('gallery');
  next();
});

app.get('/', (req, res, next) => {
  res.render('home');
  next();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
