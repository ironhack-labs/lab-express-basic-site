
const express = require('express');

const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// Route
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home.html'))


app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'))

app.get('/gallery', (request, response, next) => response.sendFile(__dirname + '/views/gallery.html'))

app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'))


  
// Server Start
app.listen(3000, () => console.log('My first basic page with express listening on port 3000! '));