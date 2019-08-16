const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/home-page.html');
})

app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/views/about-page.html');
})

app.get('/gallery', (req, res, next) => {
  res.sendFile(__dirname + '/views/gallery-page.html');
})

app.listen(3000, () => {
  console.log('Server for lab connected!');
})