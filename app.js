const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (req, res, next) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (req, res, next) => {
    res.sendFile(__dirname + '/views/works.html');
});


app.listen(port, () => {
    console.log(`Ready! Listening on port ${port}`);
});