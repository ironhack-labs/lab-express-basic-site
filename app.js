const express   = require('express')
const app = express()

// 2. MIDDLEWARES

app.use(express.static('public'))

// 3. RUTAS

app.get('/', (request, response, next) => {
    response.sendFile(__dirname + "/views/home-page.html")
})

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + "/views/about-page.html")
})

app.get("/works", (request, response, next) => {
    response.sendFile(__dirname + "/views/works-page.html")
})

app.get("/gallery", (request, response, next) => {
    response.sendFile(__dirname + "/views/gallery-page.html")
})

// 4. LEVANTAMIENTO DEL SERVIDOR
app.listen(3000, () => {
    console.log("Estoy conectado")
})