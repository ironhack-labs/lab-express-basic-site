const express = require('express');

const app = express();

const port = 550;

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html')
})

app.get('/works', (request, response) => {
    response.sendFile(__dirname + '/views/works.html')
})



app.listen(port, () => {
    console.log('listening')
})