const express = require('express');
const app = express();
const hbs = require('hbs');

// our first Route
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res, next) => {
    res.render('index');
  });

  app.get('/gallery', (req, res, next) => {
    res.render('gallery');
  });

  app.get('/about', (req, res, next) => {
    res.render('about');
  });

app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });