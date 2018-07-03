'use strict';

const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  console.log('Requested URL: ' + request.url);
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/gallery', (request, response, next) => {
  console.log('Requested URL: ' + request.url);
  response.sendFile(__dirname + '/views/gallery.html');
});

app.get('/guestbook', (request, response, next) => {
  console.log('Requested URL: ' + request.url);
  response.sendFile(__dirname + '/views/guestbook.html');
});

app.listen(3000, () => {
  console.log('Server is running');
});
