const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + "/public"))
// app.use(express.static(__dirname + "/views"))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/views/index.html")
    })

 app.get("/about",function(req,res){
    res.sendFile(__dirname + "/views/about.html")
   })

app.get("/works",function(req,res){
    res.sendFile(__dirname + "/views/works.html")
   })
   
app.get("/gallery",function(req,res){
    res.sendFile(__dirname + "/views/gallery.html")
   })
   
let server = app.listen(3000,function(){
})