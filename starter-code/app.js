const express = require('express'); //llama a la carpeta
const app = express(); //la inicializa

app.use(express.static('public')); //app usa carpeta public para vistas(html,css)


//rutas
app.get('/',(req, res, next)=>{ //petición
    res.sendFile(__dirname+'/public/views/home.html')//respuesta de qué se va a mandar, se responde con un archivo.
})

app.get('/gallery',(req, res, next)=>{ //petición
    res.sendFile(__dirname+'/public/views/gallery.html')//respuesta de qué se va a mandar, se responde con un archivo.
})

app.get('/about',(req, res, next)=>{ //petición
    res.sendFile(__dirname+'/public/views/about.html')//respuesta de qué se va a mandar, se responde con un archivo.
})

//puerto configuración
app.listen(3000,()=>{
    console.log('conexion'); //define el puerto al que se va a conectar
})





