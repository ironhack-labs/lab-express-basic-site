'use strict'

const express = require('express');
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// Pages

app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/index.html')
});

app.get('/about', (request, response, next) => {
  response.send('<h1>Cala Pola</h1>');
});

app.get('/gallery', (request, response, next) => {
  response.send('<h1>All Pictures</h1>');
});

app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
}); 