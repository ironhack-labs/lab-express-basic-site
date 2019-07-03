
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/photos', (request, response, next) => {
  response.sendFile(__dirname + '/views/photos.html');
});

app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});