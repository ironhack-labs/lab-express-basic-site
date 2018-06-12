/* use "esversion: 6" */
const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));


//Our celebrity home page
app.get('/', (request, response) => {
    // console.log(request);
    response.sendFile(__dirname + '/views/home-page.html');
  });

//About our celebrity
app.get('/about', (request, response) => {
    // console.log(request);
    response.sendFile(__dirname + '/views/about.html');
});

//Some images related to our celebrity
app.get('/gallery', (request, response) => {
    console.log(request);
    response.sendFile(__dirname + '/views/gallery.html');
});


// Server Started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
});