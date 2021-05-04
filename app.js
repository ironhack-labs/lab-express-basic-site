
const { request, response } = require('express')
const express = require('express')

//Init Express
const app = express()

//2. End points/routes handlers

//make everything inside of public/available
app.use(express.static('public'))

//our first Route:
app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html')
})

app.get('/work', (request, response, next) => {
    response.sendFile(__dirname + '/views/work.html')
})





//Listeter on a port

app.listen(3001, () => {
    console.log("server online")
})