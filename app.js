const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('public'))


app.get('/', (request, response) => {
    console.log(request)
    response.sendFile(__dirname + '/views/home-page.html')
})


app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html')
})


app.get('/albums', (request, response) => {
    response.sendFile(__dirname + '/views/albums.html')
})

app.get('/photos', (request, response) => {
    response.sendFile(__dirname + '/views/photos.html')
})

app.listen(port, () => {
    console.log('Server is running on port: ', port)
})