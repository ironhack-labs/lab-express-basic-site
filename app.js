// Require Express
const express = require('express');
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));
 
// Home
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));
// Works
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));
// About
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));
 
// Server Start
app.listen(3000, () => console.log('My first app listening on port 3000! '));