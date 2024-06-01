const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile (__dirname + '/public/index.html')
})

app.get('/about', (request, response) => {
    response.sendFile (__dirname + '/public/about.html')
})

app.get('/works', (request, response) => {
    response.sendFile (__dirname + '/public/works.html')
})

app.listen(port) 