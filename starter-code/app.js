const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/views/home-page.html');
})

app.get('/sloth', (req, res, next) => {
    res.sendFile(__dirname + '/views/sloth-page.html');
})

app.get('/sheep', (req, res, next) => {
    res.sendFile(__dirname + '/views/sheep-page.html');
})

app.listen(3011)

