const express = require('express');
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route:
app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/home.html');
});
app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/views/about.html');
});
app.get('/gallery', (req, res, next) => {
  res.sendFile(__dirname + '/views/gallery.html');
});
// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});