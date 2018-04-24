const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});

app.use(express.static('public'));

app.get('/home', (req, res, next) => {
  res.sendFile(__dirname + '/views/home-page.html');
});

app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/views/about-page.html');
});

app.get('/gallery', (req, res, next) => {
  res.sendFile(__dirname + '/views/gallery-page.html');
});
