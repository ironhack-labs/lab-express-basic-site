const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

// app.set('view engine', 'hbs');
// app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(path.join(__dirname + '/views/partials'));

app.get('/', (req, res) => {
  res.render('home.hbs', {
    title: 'Home',
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    title: 'About',
  });
});

app.get('/works', (req, res) => {
  res.render('works.hbs', {
    title: 'Works',
  });
});

app.get('/gallery', (req, res) => {
  res.render('gallery.hbs', {
    title: 'Gallery',
  });
});

app.listen(3001, () => {
  console.log(`App listening on http://localhost:3001`);
});
