const express = require('express')
const port = 3000
const app = express()

app.use(express.static('public'))

app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html');
});

// cat second route:
app.get('/cat', (request, response, next) => {
    response.sendFile(__dirname + '/views/cat-page.html');
});

// third rute
app.get('/blue', (request, response, next) => {
    response.sendFile(__dirname + '/views/blue-page.html');
});

app.get('/red', (request, response, next) => {
    response.sendFile(__dirname + '/views/red-page.html');
});

app.listen(port, () => console.log('App esdfdojshfañls'))