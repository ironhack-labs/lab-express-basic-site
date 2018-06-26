const express = require('express');

const app = express();
console.log('we are in ');

//el contenido de la app en la carpeta public 

app.use(express.static('public'));
//rutas de acceso
app.get("/", (request,response,next) => {
    response.sendFile(__dirname + '/public/home.html');
});

app.get("/about",(request, response, next) => {
    response.sendFile(__dirname + '/public/about.html')
});

app.get("/gallery", (request,response,next) => {
    response.sendFile(__dirname + '/public/gallery.html')
});
//puerto
app.listen(3000,()=>{
    console.log("puerto iniciado");
});



