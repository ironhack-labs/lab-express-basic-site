//1. IMPORTACIONES
const express =require('express');
const app = express();

//2. MIDDLEWARES
app.use(express.static('public'));

//3. RUTAS
app.get("/",(request,response,next)=>{
    response.sendFile(__dirname+"/views/home.html")
})

app.get("/about",(request,response,next)=>{
    response.sendFile(__dirname+"/views/about.html")
})

app.get("/works",(request,response,next)=>{
    response.sendFile(__dirname+"/views/works.html")
})

app.get("/gallery",(request,response,next)=>{
    response.sendFile(__dirname+"/views/gallery.html")
})

//4. LEVANTAMIENTO DEL SERVIDOR
//predner el servidor
app.listen(3000,()=>{
    console.log("tamo todoaquí")
})

