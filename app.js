const express = require('express');

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));


// home page route:
app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html')
});

// about page route:
app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about-page.html')
});

// about page route:
app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + '/views/works-page.html')
});

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! '));
