//importaciones
const { request, response } = require('express')
const express =require('express')
const app = express()

//middleware
app.use(express.static('public')) //carpeta public

//rutas/paginas
app.get('/home', (request,response,next) => {
    response.sendFile(__dirname + "/views/home-page.html")
})

app.get('/about', (request,response,next) => {
    response.sendFile(__dirname + "/views/about-page.html")
})

app.get('/work', (request,response,next)=> {
    response.sendFile(__dirname + "/views/works-page.html")
})

app.get('/photos', (request,response,next)=>{
    response.sendFile(__dirname + "/views/photoGallery.html")
})
//levantando servidor
app.listen(3000, ()=> {
    console.log("estoy listo")
})