const express = require('express');

// Express server handling requests and responses
const app = express();

app.use(express.static('public'));

// our first Route:
app.get('/', (request, response, next) => response.sendFile(__dirname + "/public/views/index.html"));

app.get('/home', (request, response, next) => response.sendFile(__dirname + "/public/views/home.html"));

app.get('/about', (request, response, next) => response.sendFile(__dirname + "/public/views/about.html"));

app.get('/pics', (request, response, next) => response.sendFile(__dirname + "/public/views/photos.html"));

// Server Started
app.listen(3000);

