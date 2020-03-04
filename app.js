const express = require('express');

const app = express();

app.use(express.static('public'));``

app.get('/home', (request, response) => response.sendFile(__dirname + '/views/home.html'))

app.get('/works', (request, response) => response.sendFile(__dirname + '/views/works.html'));

app.get('/about', (request, response) => response.sendFile(__dirname + '/views/about.html'))

app.listen(3000, () => console.log('James Joyce is listening at port 3000! '));
