const express = require('express');
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

//Link html pages to routes PROBLEM with / & /views/home
app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));

app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));
app.get('/work', (request, response, next) => response.sendFile(__dirname + '/views/work.html'));
app.get('/gallery', (request, response, next) => response.sendFile(__dirname + '/views/gallery.html'));

// Server Started
app.listen(3000, () => console.log('Yeah Im working baby, in port 3000!'));