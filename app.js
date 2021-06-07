//Importamos express
const express = require("express")
//Método express() que crea el servidor
//inicializamos el servidor express, ejecutando la funcion express (exportadada del paquete express)
const app = express()
//Con lo que devuelve al ejecutar la funcion hacemos un listen
app.listen(4000, () => {

})
//El objeto app tiene un atribut get. Recibe 2 parametros (1: la ruta y 2: una función que recibe request,response,next)
app.get("/", (request, response, next) => {
    response.sendFile(__dirname + "/views/home.html")
})
app.get("/about", (request, response, next) => {
    response.sendFile(__dirname + "/views/about.html")
})
app.get("/works", (request, response, next) => {
    response.sendFile(__dirname + "/views/works.html")
})
app.get("/photo-gallery", (request, response, next) => {
    response.sendFile(__dirname + "/views/photo-gallery.html")
})