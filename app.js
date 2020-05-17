const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('/', __dirname + '/views/home.html');
});

app.get('/works', (req, res) => {
    res.send('/', __dirname + '/views/works.html');
});

app.get('/about', (req, res) => {
    res.send('/', __dirname + '/views/about.html');
});

app.listen(3000);