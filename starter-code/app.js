'use strict';

const express = require('express');

const app = express();

app.use(express.static('public'));


app.get('/', (request, response, next) => {
  // response.status(200);
  response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/about', (request, response, next) => {
  // response.status(200);
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (request, response, next) => {
  // response.status(200);
  response.sendFile(__dirname + '/views/photo-gallery.html');
});

app.get('*', (request, response, next) => {
  response.status(404);
  response.send(`<header><h1>404 Not Found</h1></header>`);
});



// Server Started
app.listen(3000, () => {
  console.log('ola k ase 3000');
})