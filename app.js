const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res, next) => {
    res.sendFile(__dirname+'/views/home.html')
})

app.get('/about', (req, res, next) => {
    res.sendFile(__dirname+'/views/about.html')
})

app.get('/works', (req, res, next) => {
    res.sendFile(__dirname+'/views/works.html')
})

app.get('/gallery', (req, res, next) => {
    res.sendFile(__dirname+'/views/gallery.html')
})

app.use((req, res, next) => {
    res.status(404)
    res.sendFile(__dirname+'/views/404.html')
})

app.listen(port, () => {
    console.log('Listening on port: ' + port)
})