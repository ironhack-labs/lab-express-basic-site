const express = require('express');
// var serveIndex = require('serve-index');
var path = require("path");

const app = express();

// app.use('/', serveIndex(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/photos', (request, response, next) => {
  response.sendFile(__dirname + '/views/photos.html');
});


app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
});