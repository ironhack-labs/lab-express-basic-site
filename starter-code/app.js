const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/home-page.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/about-page.html'));
});

app.get('/gallery', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/gallery-page.html'));
});

app.listen(3001, () => {
  console.log('Server running on http://localhot:3000');
});
