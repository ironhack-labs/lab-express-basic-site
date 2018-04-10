'use strict'

const express = require('express');

const app = express();

app.use(express.static('./public'));

// console.log(__dirname);

// our first Route
app.get('/', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/about.html');
  });

app.get('/gallery', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/gallery.html');
  });

app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });