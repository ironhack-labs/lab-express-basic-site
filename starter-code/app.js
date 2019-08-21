const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/cars', (request, response, next) => {
  response.sendFile(__dirname + '/views/cars.html');
});

app.listen(3000, () => {
  console.log('My express lab listening on port 3000!')
});