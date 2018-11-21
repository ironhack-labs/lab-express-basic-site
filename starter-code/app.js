const express = require("express")

const app= express();

app.use(express.static(__dirname + "/public"))


//rutas
app.get("/home",(request,response)=>{
    response.sendFile(__dirname+"/views/home.html")
})

app.get("/about",(rrequest,response)=>{
    response.sendFile(__dirname+"/views/about.html")
})

app.get("/photos",(request,response)=>{
    response.sendFile(__dirname+"/views/photos.html")
})

app.listen(3000,()=>{
    console.log("conexion existosa")
})