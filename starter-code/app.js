'use strict'

// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

app.use(express.static('public'));



// our first Route:
app.get('/', (request, response, next) => {
response.sendFile(__dirname + '/views/homepage.html');
});

//this works like an if else statements unless main.js is found in public folder this will get executed instead


//second route
app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery.html');

});


//third route


app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');

});

console.log("yolo");



app.get('*', (request, response, next) => {
response.status(404);
response.send(`<div class="error-cat">

<img src="404.jpeg">
</div>`);
});

// Server Started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!');
    });
    