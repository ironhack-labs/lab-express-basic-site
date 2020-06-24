const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/home', (req, res, next) => 
res.sendFile(__dirname + '/views/home-page.html'))

app.get('/about', (req, res, next) => 
res.sendFile(__dirname + '/views/about-page.html'))

app.get('/works', (req, res, next) => 
res.sendFile(__dirname + '/views/works-page.html'))

app.get('/gallery', (req, res, next) => 
res.sendFile(__dirname + '/views/photo-page.html'))

app.listen(3000, () => console.log('My first app and I did not break anything!'));
