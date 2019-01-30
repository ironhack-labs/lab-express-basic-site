// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// home page Route:
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/homepage.html');
});

// about page route:
app.get('/aboutpage', (request, response, next) => {
  response.sendFile(__dirname + '/views/aboutpage.html');
});
//photogallery route:
app.get('/photogallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/photogallery.html');
  });

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});
