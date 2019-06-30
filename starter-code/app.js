const express = require('express');
const bodyParser = require('body-parser');  
const url = require('url');  
const querystring = require('querystring');  

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));  

app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/problem.html');
});

app.get('/sweat', (request, response, next) => {
  response.sendFile(__dirname + '/views/problem.html');
});

app.get('/tips', (request, response, next) => {
  response.sendFile(__dirname + '/views/tips.html');
});

app.get('/location', (request, response, next) => {
  response.send(request.query);

});

// Server Started
app.listen(3001, () => {
  console.log('listening');
});