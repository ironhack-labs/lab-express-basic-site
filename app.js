const express = require('express');
const app = express();
const port = 3000

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile (__dirname + '/views/home.html')
})

app.get('/About', (request, response) => {
    response.sendFile (__dirname + '/views/about.html')
})

app.get('/Works', (request, response) => {
    response.sendFile (__dirname + '/views/works.html')
})

app.listen (port, () => {
    console.log(`Example app listening on port ${port}`)
})
