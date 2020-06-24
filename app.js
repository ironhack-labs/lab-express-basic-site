const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (req, res) => {
    console.log("here");
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/worrrks', (req, res) => {
    res.sendFile(__dirname + '/views/works.html');
});

app.get('/photogallery', (req, res) => {
    res.sendFile(__dirname + 'views/photogallery.html');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});