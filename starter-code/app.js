// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

app.get('/', (request, response, next) => {
  response.sendFile(__dirname+'/views/index.html');
});

app.get('/index.html', (request, response, next) => {
  response.sendFile(__dirname+'/views/index.html');
});

app.get('/about.html', (request, response, next) => {
  response.sendFile(__dirname+'/views/about.html');
});

app.get('/contact.html', (request, response, next) => {
  response.sendFile(__dirname+'/views/contact.html');
});



// Server Starts
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});