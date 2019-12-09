const express = require("express");
const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html');
  });

  app.get('/photo-page', (request, response, next) => {
    response.sendFile(__dirname + '/views/photo-page.html');
  });

  app.get('/about-page', (request, response, next) => {
    response.sendFile(__dirname + '/views/about-page.html');
  });


  app.listen(3000);