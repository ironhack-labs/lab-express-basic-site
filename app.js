// Importación
const { response } = require('express')
const express = require('express')
const { request } = require('http')
const app = express()
    // Middlewares
app.use(express.static('public'))
    // Rutas
app.get("/", (request, response, next) => {
    response.sendFile(__dirname + "/views/Home.html")
})

app.get("/About", (request, response, next) => {
    response.sendFile(__dirname + "/views/About.html")
})

app.get("/Works", (request, response, next) => {
    response.sendFile(__dirname + "/views/Works.html")
})

app.get("/images", (request, response, next) => {
    response.sendFile(__dirname + "/views/images.html")
})

//Levantamiento del servidor
app.listen(3000, () => {
    console.log("Conectado")
})