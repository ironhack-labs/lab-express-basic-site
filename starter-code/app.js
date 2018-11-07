const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/about', (request, response, next) => {
  response.sendFile(`${__dirname}/public/views/${request.url}.html`);
});
app.get('/homepage', (request, response, next) => {
  response.sendFile(`${__dirname}/public/views/${request.url}.html`);
});
app.get('/', (request, response, next) => {
  response.redirect('/homepage');
});
app.get('/photogalery', (request, response, next) => {
  response.sendFile(`${__dirname}/public/views/${request.url}.html`);
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});
