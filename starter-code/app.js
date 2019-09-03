const express = require('express');
const app = express();

const homePage = (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html');
}

const aboutPage = (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
}

const galleryPage = (request, response, next) => {
  response.sendFile(__dirname + '/views/gallery.html');
}

const brokenLink = (request, response, next) => {
  response.status(404);
  response.send("PAGE NOT FOUND<br>“If the heart could think it would stop beating.”");
}


app.use(express.static('public'));
app.get('/', homePage);
app.get('/about', aboutPage);
app.get('/gallery', galleryPage);
app.get('*', brokenLink)


app.listen(3000);