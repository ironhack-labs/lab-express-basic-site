// adding Express
const express = require('express');

// Express server hanlding requests and responses
const app = express();

app.use(express.static("public"));

// home page Route:
app.get('/', (request, response, next) => response.status(200).sendFile(__dirname + '/views/home-page.html'));

// about page Route 
app.get('/about', (request, response, next) => response.status(200).sendFile(__dirname + '/views/about.html'));

// works page Route
app.get('/works', (request, response, next) => response.status(200).sendFile(__dirname + '/views/works.html'));

// photo-gallery Route
app.get('/photo-gallery', (request, response, next) => response.status(200).sendFile(__dirname + '/views/photo-gallery.html'));

const port = 3000;

app.listen(3000, () => {
    console.log('Andrei Alvarez: writer, journalist and from now web developer');
});