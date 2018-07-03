const express = require('express');
const app = express();

app.use(express.static('public'));

//our first route
app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res, next) => {
  // console.log(req);
  res.sendFile(__dirname + '/views/about-us.html');
});

app.get('/gallery', (req, res, next) => {
  // console.log(req);
  res.sendFile(__dirname + '/views/gallery.html');
});

app.listen(3000, () => {
  console.log('Running on port 3000!');
});