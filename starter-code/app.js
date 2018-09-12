const express = require('express');
const app = express();
const hbs = require('hbs');

// our first Route
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

let title = {
    about: 'About Us',
    home: 'Welcome',
    gallery: 'Gallery'
}
app.get('/', (req, res, next) => {
    res.render('index', {title:title.home});
  });

  app.get('/gallery', (req, res, next) => {
    res.render('gallery', {title:title.gallery});
  });

  app.get('/about', (req, res, next) => {
    res.render('about', {title:title.about});
  });

app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });