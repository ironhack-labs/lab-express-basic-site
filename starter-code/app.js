/* eslint-disable no-undef */

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// Home Page
app.get('/', (req, res) => {
  console.log(req);
  res.sendFile(`${__dirname}/views/home-page.html`);
});

// About Page
app.get('/about', (req, res) => {
  console.log(req);
  res.sendFile(`${__dirname}/views/about-page.html`);
});

// Photo Gallery Page
app.get('/gallery', (req, res) => {
  console.log(req);
  res.sendFile(`${__dirname}/views/gallery-page.html`);
});

// Listen Port and Host
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
