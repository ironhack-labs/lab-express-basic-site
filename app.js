const express = require('express')

const app = express()

app.use(express.static('public'));

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/index.html'))
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'))
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'))
app.get('/gallery', (request, response, next) => response.sendFile(__dirname + '/views/gallery.html'))

app.listen(3000, () => console.log('My first app listening on port 3000! '));
