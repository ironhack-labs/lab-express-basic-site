const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/index.html'));
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));
app.get('/photos', (request, response, next) => response.sendFile(__dirname + '/views/Photo-gallery.html'));
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/Works.html'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})