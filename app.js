const express = require("express")
const app = express();

app.use(express.static('public'))

//primera ruta

app.get('/home', (request, response, next) => 
    response.sendFile(__dirname + '/views/index.html'));

//ruta para la pagina about

app.get('/aboutButerin', (request, response, next) =>
    response.sendFile(__dirname + '/views/about.html'));

app.get('/works', (request, response, next) => 
    response.sendFile(__dirname + '/views/works.html'));

app.get('/gallery', (request, response, next) => 
    response.sendFile(__dirname + '/views/gallery.html'));

app.listen('3000', () => console.log("la app escuchando en el puerto 3000"))  //con esto express recibe la peticion 
//conecta servidor interno HTTP de Node con la app Express