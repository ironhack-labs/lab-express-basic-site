const express = require('express'); //importamos paquete express

const app = express(); //ejecutamos

app.use(express.static('public'));



app.get('/',(request, response, next) => { //definimos ruta con get para home ('/')
    console.log(request)
    response.sendFile(__dirname + '/views/index.html'); //enviamos el texto en home
});

app.get('/about',(request, response, next) => { //definimos ruta con get para about ('/')
    response.sendFile(__dirname + '/views/about.html'); //enviamos el texto en about page

});
app.get('/to-do',(request, response, next) => { //definimos ruta con get para works ('/')
    response.sendFile(__dirname + '/views/to-do.html'); //enviamos el texto en works page

});
app.get('/photo-gallery',(request, response, next) => { //definimos ruta con get para photos ('/')
    response.sendFile(__dirname + '/views/photo-gallery.html'); //enviamos el texto en photo page
   
});

app.listen(3000, () => {
    console.log ('App running on port 3000') //localhost:3000
});