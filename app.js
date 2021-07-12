// Import / requires
const express = require('express');

// Make everything inside of public / available
const app = express();
app.use(express.static('public'));

// Routes
app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));

// Server started
app.listen(3000, () => console.log('My first app listening on port 3000! '));