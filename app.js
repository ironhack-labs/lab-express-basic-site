/*
1. IMPORTACIONES    
*/
const express = require("express")
const app = express()
app.use(express.static('public'))
    /*
    2. RUTAS
    */
app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html');
})
app.get('/about', (request, response, next) => {
        response.sendFile(__dirname + '/views/about.html');

    })
    // localhost:3000/home
app.get('/works', (request, response, next) => {

        response.sendFile(__dirname + '/views/works.html');
    })
    /*
    3. SERVIDOR
    */
app.listen(3002, () => {
    console.log("Levantamos el servidor en el puerto 3002")
})