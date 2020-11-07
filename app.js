// DEPENDENCIAS
const express = require('express');
const app = express();


// MIDDELWARES
app.use(express.static('public'))

// RUTAS
app.get('/home', (request, response, next) =>{
    response.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html')
})

app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + '/views/works.html')
})

app.listen(3000, () => {
    console.log("runs")
})