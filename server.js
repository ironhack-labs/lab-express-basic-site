const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  response.redirect('/home');
});

app.get('/home', (request, response, next) => {
  response.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/about', (request, response, next) => {
  response.sendFile(path.join(__dirname, '/views/about.html'));
});

app.get('/gallery', (request, response, next) => {
  response.sendFile(path.join(__dirname, '/views/gallery.html'));
});

app.listen(1500, () => {
  console.log('Started on port 1500!');
});
