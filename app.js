'use strict'

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/home', (request, response, next) => {
  console.log('hello');
  response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/about', (request, response, next) => {
  console.log('about-page');
  response.sendFile(__dirname + '/views/about-page.html');
});

app.get('/photos', (request, response, next) => {
  console.log('photos');
  response.sendFile(__dirname + '/views/photos-page.html')
});

app.listen(4000, () => {
  console.log('working');
});