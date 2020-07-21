const express = require('express');

const app = express();

app.use(express.static('public'));

app.get("/", (request, response, next) => {
    response.status(200).sendFile(__dirname + '/views/home-page.html')
});

app.get("/gallery", (request, response, next) => {
    response.status(200).sendFile(__dirname + '/views/photo-gallery.html')
});

app.get("/works", (request, response, next) => {
    response.status(200).sendFile(__dirname + '/views/works.html')
});

app.get("/about", (request, response, next) => {
    response.status(200).sendFile(__dirname + '/views/about.html')
});

const port = 3001

app.listen(3001, () => {
    console.log(`I AM LISTENIIIING YOU, PORT ${port}`)
});