// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

app.use(express.static('public'));

// our first Route:
app.get('/home', (request, response, next) => {
  response.send('<h1>Welcome to Home Page. </h1> <a href="/about">To go to About Page!</a> <img src="/">');
});

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html')
  });

  app.get('/photogallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/photogallery.html')
  });

//   app.get('/style', (request, response, next) => {
//     response.sendFile(__dirname + '/stylesheets/style.css')
//   });

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});



