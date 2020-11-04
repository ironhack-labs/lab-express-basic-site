const express = require('express')
const app = express()

app.use(express.static("public"))

app.get('/home', (req, res) => {
    res.sendFile(`${__dirname}/views/home.html`)
})

app.get('/about', (req, res) => {
    res.sendFile(`${__dirname}/views/about.html`)
})

app.get('/gallery', (req, res) => {
    res.sendFile(`${__dirname}/views/gallery.html`)
})

app.listen(3000)