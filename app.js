const express = require("express")
const { get } = require("http")
const app = express()

//servidor
app.use(express.static("public"))
app.listen(3000,()=>{

})
//rutas
app.get("/",(request,response,next)=>{
    response.sendFile(__dirname + "/views/home.html")
})
app.get("/about",(request,response,next)=>{
    response.sendFile(__dirname + "/views/about.html")
})
app.get("/gallery",(request,response,next)=>{
    response.sendFile(__dirname + "/views/gallery.html")
})
app.get("/works",(request,response,next)=>{
    response.sendFile(__dirname + "/views/works.html")
})