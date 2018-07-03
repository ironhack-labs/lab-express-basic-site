'use strict'

const express = require('express');

const app = express();

app.use(express.static('public')); 

app.get('/', (request, response, next) => {
  console.log(request.url);
  response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/photos', (request, response, next) => {
  response.sendFile(__dirname + '/views/photo-gallery.html');
});

app.listen(3000, () => {
  console.log('First express projet !!!!')
});
