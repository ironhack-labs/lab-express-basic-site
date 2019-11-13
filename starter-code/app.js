//Require Express
const express = require('express');



//Express server handling requests and responses 
const app = express();



//Middleware
app.use(express.static('public'));


//Our first route

app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/public/views/index.html');
});

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/public/views/about.html');
});

app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/public/views/gallery.html');
});



//Server started
app.listen(3000, () => {
  console.log("Server Has Started on port 3000!");
});