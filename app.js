const express = require('express')
const server = express()
const port = 3000

server.use(express.static(`public`))

server.get('/', function (req, res){
    res.sendFile(`${__dirname}/views/index.html`)
})
server.get('/about', function (req, res){
    res.sendFile(`${__dirname}/views/about.html`)
})
server.get('/works', function (req, res){
    res.sendFile(`${__dirname}/views/works.html`)
})
server.get('/gallery', function (req, res){
    res.sendFile(`${__dirname}/views/gallery.html`)
})

server.listen(port , () => console.log("the server has started biuyatch"))

