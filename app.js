// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// Home Route:
app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/views/home-page.html`);
});

// About route:
app.get('/about', (request, response) => {
  response.sendFile(`${__dirname}/views/about.html`);
});

// Gallery route:
app.get('/gallery', (request, response) => {
  response.sendFile(`${__dirname}/views/gallery.html`);
});

// Server Started
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('My first app listening on port 3000!');
});
