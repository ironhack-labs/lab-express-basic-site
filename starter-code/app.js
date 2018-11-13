const express = require('express');
const app = express();

var path = require("path");

app.use('/', express.static(path.join(__dirname, 'public')))

// Index 
var serveIndex = require('serve-index');
app.use('/', serveIndex(path.join(__dirname, 'public'))); 


app.get('/home', (request, response, next) => {

    response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery.html');
});

app.listen(8000, () => {
    console.log('My first app listening on port 8000!')
});