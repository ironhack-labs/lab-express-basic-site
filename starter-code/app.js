// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// add page Routes:
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/about/', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/photogallery/', (request, response, next) => {
  response.sendFile(__dirname + '/views/photogallery.html');
});


// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});

// make this work using: 'npm init' in project folder
// install express for the current project: 'npm install express --save'
// start server with: 'nodemon app.js'