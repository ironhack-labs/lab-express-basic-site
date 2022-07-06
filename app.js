const { response } = require('express')
const express = require('express')
const { request } = require('http')
const app = express()
app.use(express.static('public'))
app.get('/home', (request, response) => {
    response.sendFile('/views/home.html')
})
app.get('/about', (request, response) => {
    response.sendFile('/views/about.html')
})
app.get('/work', (request, response) => {
    response.sendFile('/views/work.html')
})
app.get('/gallery', (request, response) => {
    response.sendFile('/views/gallery.html')
})