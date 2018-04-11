const express = require('express');

const app = express(); 

app.use (express.static ("public"));

// our first Route:
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home-page.html');
});

// about route:
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about-page.html');
});

// about route:
app.get('/photo', (request, response, next) => {
  response.sendFile(__dirname + '/views/photo-page.html');
});

app.listen (2000, () => {
  console.log("Server Ready !");
});