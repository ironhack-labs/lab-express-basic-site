const express = require('express');
const hbs = require("hbs");
const app = express();
const path = require("path");

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', (request, res) => {
  res.render('index');
});

app.get('/about', (request, res) => {
  res.render('about');
});

app.get('/gallery', (request, res) => {
    res.render('gallery');
  });

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});