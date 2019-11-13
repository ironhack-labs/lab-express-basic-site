// Require Express
const express = require('express');
const morgan = require('morgan');

const logger = morgan('tiny'); // logger function

// Express server
const app = express();


// Middleware
app.use(logger);
app.use(express.static('public')); 


// our first Route:
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/public/views/index.html');
});

app.get('/home', (request, response, next) => {
response.sendFile(__dirname + '/public/views/index.html');
});

app.get('/about', (request, response, next) => {
response.sendFile(__dirname + '/public/views/about.html');
});

app.get('/gallery', (request, response, next) => {
response.sendFile(__dirname + '/public/views/gallery.html');
});


// Server Started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!');
});