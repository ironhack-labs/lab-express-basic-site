// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// all my routes
app.get('/home', (request, response, next) => response.sendFile('C:/Users/Thibault/Desktop/Node/lab-express-basic-site/views/home-page.html'));
app.get('/about', (request, response, next) => response.sendFile('C:/Users/Thibault/Desktop/Node/lab-express-basic-site/views/about.html'));
app.get('/works', (request, response, next) => response.sendFile('C:/Users/Thibault/Desktop/Node/lab-express-basic-site/views/works.html'));
// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! '));