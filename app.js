// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// first route, home
app.get('/home', (req, resp, next) => resp.sendFile(__dirname + '/views/home-page.html'))
console.log(__dirname)

// second route, about
app.get('/about', (req, resp, next) => resp.sendFile(__dirname + '/views/about-page.html'));

// third route, works
app.get('/works', (req, resp, next) => resp.sendFile(__dirname + '/views/works-page.html'));

// fourth route, gallery
app.get('/gallery', (req, resp, next) => resp.sendFile(__dirname + '/views/gallery-page.html'));



// Server Started
app.listen(3000, () => console.log('My website on port 3000!'));