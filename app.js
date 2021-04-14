const express = require('express');
const app = express();
const port = 4010;

app.use(express.static(__dirname + '/public'));

const pages = ['home', 'about', 'works'];

pages.forEach((page) => {
  app.get('/' + page, (request, response) => {
    response.sendFile(__dirname + `/views/${page}.html`);
  });
});

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.listen(port, () => {
  console.log('Server listening');
});
