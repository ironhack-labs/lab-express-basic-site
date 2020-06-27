const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/home', (request, response, next) => {
    response.sendfile(__dirname + '/views/home-page.html');
})

app.get('/about', (request, response, next) => {
    response.sendfile(__dirname + '/views/about-page.html');
})

app.get('/works', (request, response, next) => {
    response.sendfile(__dirname + '/views/works-page.html');
})

app.get('/gallery', (request, response, next) => {
    response.sendfile(__dirname + '/views/gallery-page.html');
})

app.listen(3000);