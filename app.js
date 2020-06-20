const express = require('express')

const app = express()

app.get('/', function (request, response) {
    response.send('Home')
})

app.get('/about', function (request, response) {
    response.send('About')
})

app.get('/works', function (request, response) {
    response.send('Works')
})

app.get('/works', function (request, response) {
    response.send('Gallery')
})

app.listen(3000, () => console.log('It´s running')) 