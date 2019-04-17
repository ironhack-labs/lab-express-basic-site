const express = require('express');

const app = express();

app.use(express.static('public'));


app.get('/home', (req, response, next) => {
  response.sendFile(__dirname + '/public/views/home.html');
});

app.get('/about', (req, response, next) => {
  response.sendFile(__dirname + '/public/views/about.html');
});

app.get('/photo', (req, response, next) => {
  response.sendFile(__dirname + '/public/views/photo.html');
});

app.listen(3000, () => {
  console.log('app linstening on port 3000');
});

