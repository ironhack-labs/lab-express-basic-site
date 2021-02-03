// 1. Importaciones

const { response } = require('express')
const express = require('express')
const app = express()

// 2. Middlewares

app.use(express.static('public'))

// 3. Rutas

app.get('/', (request, response, next) => {
    console.log(request)
    response.send('<h1>Zeal & Ardor</h1>')
})

app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html')
})

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about-page.html')
})

app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery-page.html')
})

app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + '/views/works-page.html')
})



// 4. Levantamiento del servidor
app.listen(3000, () => {
    console.log('server conected')
})