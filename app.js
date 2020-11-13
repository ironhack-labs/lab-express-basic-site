const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about-page.html'));
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works-page.html'));
app.get('/photo-gallery', (request, response, next) => response.sendFile(__dirname + '/views/photo-gallery.html'));

app.listen(3000);