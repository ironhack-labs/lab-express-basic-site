const express = require('express');
const app = express();


app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/home.html');
});
app.get('/about', (req, res, next) => {
    res.sendFile(__dirname + '/views/about.html');
  });
app.get('/bio', (req, res, next) => {
  res.sendFile(__dirname + '/views/bio.html');
});
app.get('/records', (req, res, next) => {
  res.sendFile(__dirname + '/views/records.html');
});
app.get('/gallery', (req, res, next) => {
  res.sendFile(__dirname + '/views/gallery.html');
});

app.listen(3000, () => console.log('App escuchando por el puerto 3000'));

app.use(express.static('public'));