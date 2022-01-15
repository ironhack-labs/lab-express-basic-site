const express = require("express");

const app = express();

app.use(express.static('public'));
let port = 3000;
app.listen(port);

app.get("/home", (request, response, next) => {
    response.sendFile(__dirname + '/views/homepage.html');
});

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
  });
  
app.get('/photos', (request, response, next) => {
    response.sendFile(__dirname + '/views/photos.html');
  });
  
app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + '/views/works.html');
  });