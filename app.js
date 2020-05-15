const express = require("express");

const app = express();

// Make public directory available
app.use(express.static('public'));

app.get('/home', (req, res, next) => {
    res.sendFile(__dirname + '/views/home-page.html')
});

app.get('/about', (req, res, next) => {
    res.sendFile(__dirname + '/views/about-page.html')
});

app.get('/works', (req, res, next) => {
    res.sendFile(__dirname + '/views/works-page.html')
});

app.get('/gallery', (req, res, next) => {
    res.sendFile(__dirname + '/views/gallery-page.html')
});

app.listen(3000)