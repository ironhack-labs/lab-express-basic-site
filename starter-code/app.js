const express = require('express')

const app = express()

//declarar la carpeta publica como estatica
app.use(express.static('public'))

//rutas
app.get('/', (request,response)=>{
    response.sendFile(__dirname +'/views/home.html' )
})

app.get('/about', (request,response)=>{
    response.sendFile(__dirname +'/views/about.html' )
})

app.get('/photo', (request,response)=>{
    response.sendFile(__dirname +'/views/photo.html' )
})


//llamar al local host  
app.listen(3000, ()=>{
    console.log("conexion exitosa")
})