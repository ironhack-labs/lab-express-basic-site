const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.static('views'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/homepage.html');
});

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/photos.html');
});

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/funcs.js');
});

app.listen(4000, () => {});
