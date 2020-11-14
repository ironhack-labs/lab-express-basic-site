// Dependencias/Variables
const express = require(`express`);
//Crear la aplicación
const app = express();

//Middlewares
app.use(express.static(`public`))

//Rutas
//Ruta Home
app.get(`/`, (request, response, next) => {

        response.sendFile(__dirname + `/views/home-page.html`)
})
//Ruta About
app.get(`/about`, (request, response, next) => {

    response.sendFile(__dirname + `/views/about.html`)
})
//Ruta Work
app.get(`/work`, (request, response, next) => {

    response.sendFile(__dirname + `/views/works.html`)
})
//Ruta Gallery
app.get(`/gallery`, (request, response, next) => {

    response.sendFile(__dirname + `/views/gallery.html`)
})


//Listener (creación del servidor)
app.listen(3000,() => {
    console.log(`Express basic site on port:3000`)
})



