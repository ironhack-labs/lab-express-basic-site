const express = require ('express')
let app = express()
app.use(express.static('public'))

app.get ("/", (req,res) =>{
    res.sendfile(__dirname + "/views/home.html")
})
app.get ("/gallery", (req,res) =>{
    res.sendfile(__dirname + "/views/gallery.html")
})
app.get ("/about", (req,res) =>{
    res.sendfile(__dirname + "/views/about.html")
})

app.listen (5000, function(){
    console.log("Working")
})

