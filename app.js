const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/views/home.html');
});

// definir public:
app.use('/public', express.static('public'));

app.get('/about', (req, res, next) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (req, res, next) => {
    res.sendFile(__dirname + '/views/works.html');
});

app.get('/styles', (req, res, next) => {
    res.sendFile(__dirname + '/public/css/styles.css');
});

app.get('/bg-img', (req, res, next) => {
    res.sendFile(__dirname + '/public/images/top-mobile.jpg');
});

app.listen(port, () => {
    console.log(`Ready! Listening on port ${port}`);
});