// Require Express
const express = require('express');
 
// Express server handling requests and responses
const app = express();

app.use(express.static('public'));

//home
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));
 
// about:
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

// gallery:
app.get('/gallery', (request, response, next) => response.sendFile(__dirname + '/views/gallery.html'));

// works:
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));
 
// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! '));