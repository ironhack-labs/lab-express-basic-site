const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/home', (_, response) => {response.sendFile(__dirname + '/views/home.html' + '/public/IMG_2565.JPG')
})

app.get('/about', (_, response) => {response.sendFile(__dirname + '/views/about.html')
})

app.get('/works', (_, response) => {response.sendFile(__dirname + '/views/works.html')
})

app.get('/gallery', (_, response) => {
    response.sendFile(__dirname + '/views/gallery.html' + '/public/IMG_2447.JPG' + '/public/IMG_2425.JPG' + '/public/IMG_2575.JPG')
})


app.listen(5555)