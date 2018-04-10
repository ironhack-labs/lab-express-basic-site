'use strict'

const express = require('express');
const app = express();

// Make everything inside of public/ available - middlewear
app.use(express.static('public'));


// our first Route
app.get('/', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/public/html/home.html');
});

app.get('/gallery', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/public/html/gallery.html');
  });

app.get('/about', (request, response, next) => {
console.log(request);
response.sendFile(__dirname + '/public/html/about.html');
});



// Server Started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });

