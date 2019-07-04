const express = require('express');

const app = express();

app.get('/', (request, res, next) => {
  res.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, res, next) => {
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (request, res, next) => {
  res.sendFile(__dirname + '/views/gallery.html');
});

app.listen(3002, () => {
  console.log('My first app listening on port 3002!');
});
