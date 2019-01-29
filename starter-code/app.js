const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/html/home.html');
});

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/html/about.html');
});

app.get('/galery', (request, response, next) => {
  response.sendFile(__dirname + '/html/galery.html');
});

app.listen(3000, () => {
  console.log('My first website listening on port 3000!');
});
