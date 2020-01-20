const express = require('express');
const hbs = require('hbs');
const app = express();
const path = require('path')

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about', data);
});

app.get('/photo gallery', (req, res) => {
   res.render('photo gallery');
  });

app.listen(3000, '127.0.0.1', () => {
  console.log('Listening to the port 3000')
});