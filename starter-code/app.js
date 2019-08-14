const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home-page.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
})

app.get('/photo-gallery-page', (req, res) => {
    res.sendFile(__dirname + '/views/photo-gallery-page.html');
})

app.listen(3000);