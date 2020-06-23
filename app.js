const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/',(req,res,next) => {
    res.redirect('/home')
})

app.get('/home',(req,res,next) => {
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/about',(req,res,next) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.get('/work',(req,res,next) => {
    res.sendFile(__dirname + '/views/works.html')
})

app.get('/photo-gallery',(req,res,next) => {
    res.sendFile(__dirname + '/views/photo-gallery.html')
})

app.listen(3000,() => 'Starting server')