const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/index', (req, res, next) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (req, res, next) => {
  res.sendFile(__dirname + '/views/gallery.html');
});

app.listen(PORT, () => {
  console.info(`App listen at port ${PORT}`);
});