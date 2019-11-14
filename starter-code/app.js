// Require Express
const express = require('express');
const morgan = require('morgan');

const logger = morgan('tiny');
// Express server handling requests and responses
const app = express();


// our first Route:
app.use(logger);
app.use( express.static('public') ); // GET XYZ.ext

app.use((request, response, next) => {
    console.log('Miyazaki going LIVE');

    next();
});

app.get('/', (request, response, next) => {
    response.send('<h1>testing testing landing</h1>'); // change to video landing
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
    console.log('Studio Ghibli listening port');
});