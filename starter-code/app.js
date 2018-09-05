// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ will be available
app.use(express.static('public')); // you only need to use one / to access public folder

// our first Route:
app.get('/', (request, response, next) => {
  response.sendFile( __dirname+ '/views/index.html');
});

// our second Route:
app.get('/about', (request, response, next) => {
  response.sendFile( __dirname+ '/views/about.html');
});

// our third Route:
app.get('/donate', (request, response, next) => {
  response.sendFile( __dirname+ '/views/donate.html');
});

// Server Started
app.listen(3000, () => {
  console.log('My second app listening on port 3000!');
});