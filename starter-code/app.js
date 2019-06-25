const express = require("express")

const app = express()

const PORT = 3000

app.use(express.static('public'))



app.get("/",(req, res)=>{
    res.sendFile(__dirname+"/views/home.html")
})


app.get("/about",(req, res)=>{
    res.sendFile(__dirname+"/views/home.html")
})


app.get("/photo_gallery",(req, res)=>{
    res.sendFile(__dirname+"/views/photo-gallery.html")
})




app.listen(PORT)