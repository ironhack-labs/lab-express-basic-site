// set up
const { request, response } = require('express');
const express = require('express');
const app = express();

// register public folder
app.use(express.static(__dirname + '/public'));

// set up pages/files
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html')
})

app.get('/works', (request, response) => {
    response.sendFile(__dirname + '/views/works.html')
})

app.get('/gallery', (request, response) => {
    response.sendFile(__dirname + '/views/gallery.html')
})

// server listen
app.listen(3000, () => {
    console.log('server listening')
})