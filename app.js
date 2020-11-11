const {request, response} = require('express');
const express = require('express')
const app = express();

app.use(express.static(__dirname + '/public'))

app.get('/', (request, response) => {
    console.log('This is the home page')
    response.sendFile(__dirname + '/views/home-page.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.get('/documentary', (req, res) => {
    res.sendFile(__dirname + '/views/documentary.html')
})

app.get('/music', (req, res) => {
    res.sendFile(__dirname + '/views/music.html')
})

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})