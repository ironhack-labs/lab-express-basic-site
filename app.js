const express = require('express');

const app = express();

app.use(express.static('public'))

app.get('/home', (request, response) =>
    response.sendFile(__dirname + '/views/index.html'));

app.get('/about', (request, response) =>
    response.sendFile(__dirname + '/views/about.html'));

app.get('/work', (request, response) =>
    response.sendFile(__dirname + '/views/work.html'));

app.listen(3000, () => {
    console.log("My first express app is up and runing on port 3000")
})