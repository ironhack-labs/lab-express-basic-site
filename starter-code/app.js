const express = require("express");

const app = express();
const pathHome = __dirname + '/views/home.html';
const pathAbout = __dirname + '/views/about.html';
const pathGallery = __dirname + '/views/gallery.html';

const port = 3000;

app.use(express.static("public"));



app.get('/', (req, res) => {
  res.sendFile(pathHome);
});

app.get('/about', (req, res) => {
  res.sendFile(pathAbout);
});

app.get('/gallery', (req, res) => {
  res.sendFile(pathGallery);
});


app.listen(port);