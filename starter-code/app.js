// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// About Page
app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about-page.html')
})

// Photo Gallery Pages
app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/photo-gallery-page.html')
})

// Home Page
app.get('*', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html')
});

// Server Started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
});