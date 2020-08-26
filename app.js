const express = require("express")
const { request, response } = require("express")

//Generamos una instancia de express llamada app
const app = express()

//Permitir el uso de carpeta publica
app.use(express.static("public"))

//Get to index page, about, and work
app.get("/", (request, response) => {
    response.sendFile(`${__dirname}/views/index.html`)
})

app.get("/about", (request, response) => {
    response.sendFile(`${__dirname}/views/about.html`)
})

app.get("/work", (request, response) => {
    response.sendFile(`${__dirname}/views/work.html`)
})


//Montamos al servidor en el puerto 3000
app.listen(3000, () => {
    console.log('listening on: http:/localhost:3000')
})