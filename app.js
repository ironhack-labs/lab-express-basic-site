const express = require('express');

const app = express();

app.use(express.static('public'))

app.get('/', (_, response) => {
    response.sendFile(__dirname + '/views/index.html')
})
app.get('/about', (_, response) => {
    response.sendFile(__dirname + '/views/about.html')
})
app.get('/work', (_, response) => {
    response.sendFile(__dirname + '/views/work.html')
})
app.get('/gallery', (_, response) => {

    response.sendFile(__dirname + '/views/gallery.html')
})

app.listen(4000)