const express = require('express');
const app = express();

app.use(express.static('public'));

// HOMEPAGE
app.get('/', (request,response,next) => {

    response.sendFile(__dirname + '/views/home.html');

});

// ABOUT US
app.get('/about-us', (request,response,next) => {

    response.sendFile(__dirname + '/views/about-us.html');

});

// PHOTO GALLERY
app.get('/photos', (request,response,next) => {

    response.sendFile(__dirname + '/views/photos.html');

});

app.listen(3000, () => {

console.log('My first app listening on port 3000!');

});