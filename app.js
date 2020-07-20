const express = require('express')
require('dotenv').config()
const app = express()
app.use(express.static('public'));

app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));

app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));

app.get('/photos', (request, response, next) => response.sendFile(__dirname + '/views/photos.html'));

app.listen(process.env.PORT, () => console.log(`My first app listening on port ${process.env.PORT} `));
