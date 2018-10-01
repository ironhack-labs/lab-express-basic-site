const express = require('express');
const app = express();

app.use(express.static("public"));

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/photo-gallery', (req, res, next) => {
  res.sendFile(__dirname + '/views/photo-gallery.html');
});

app.use((req, res) => {
  res.send('404, error en la matrix', 404);
});

app.listen(3000, () => {
  console.log('Port 3000 is being used!');
});