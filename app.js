const express = require('express');
const e = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  response.status(200).sendFile(
    __dirname + '/views/home.html')
});
app.get('/works', (request, response, next) => {
  response.status(200).sendFile(
    __dirname + '/views/works.html')
});
app.get('/about', (request, response, next) => {
  response.status(200).sendFile(
    __dirname + '/views/about.html')
});

const port = 3000;

app.listen(port);