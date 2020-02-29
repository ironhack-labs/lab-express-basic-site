const express = require('express');
const app = express();

app.use(express.static('public'));

// Homepage route
app.get('/home', (request, response) => 
response.sendFile(__dirname + '/views/home.html'))

// About page route
app.get('/about', (request, response) => 
response.sendFile(__dirname + '/views/about.html'))

// Works page route

app.get('/works', (request, response) => 
response.sendFile(__dirname + '/views/works.html'))

// Gallery page route

app.get('/gallery', (request, response) => 
response.sendFile(__dirname + '/views/gallery.html'))



app.listen(3000, () => console.log('My first app listening on port 3000! '));