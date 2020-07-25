const express = require('express');
const app = express();

app.use(express.static('public'));

// home page
app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/index.html'));

// about page
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

// works page
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'));
