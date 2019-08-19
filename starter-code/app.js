const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  response.sendFile(`${__dirname}/views/home-page.html`);
});

app.get('/about-page.html', (request, response, next) => {
  response.sendFile(`${__dirname}/views/about-page.html`);
});

app.get('/photo-gallery-page.html', (request, response, next) => {
  response.sendFile(`${__dirname}/views/photo-gallery-page.html`);
});

app.listen(5000, () => {
  console.log('My lab application listening on port 5000!');
});
