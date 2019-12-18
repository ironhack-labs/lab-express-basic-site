const express = require('express');
const app = express();

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home-page.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/photos', (req, res, next) => {
    res.sendFile(__dirname + '/views/photos.html');
});


app.listen(4000, () => console.log('server is running'));