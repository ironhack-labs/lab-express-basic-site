

const express = require('express');

var path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', (request, response, next) => {

  response.sendFile(__dirname + '/view/home-page.html');
});

app.get('/about', (request, response, next) => {

    response.sendFile(__dirname + '/view/about-page.html');
  });
  
app.get('/gallery', (request, response, next) => {

    response.sendFile(__dirname + '/view/photo-gallery-page.html');
  });


app.listen(3000, () => {
    console.log('Surf in Spain app')
  });