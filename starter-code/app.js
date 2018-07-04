const express = require('express');
const app = express();

app.use(express.static('public'));


// Home Page
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home-page.html');
});

// Galerie Page
app.get('/galeria', (request, response, next) => {
  response.sendFile(__dirname + '/views/galerie.html');
});


// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});