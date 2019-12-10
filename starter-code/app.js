const express = require("express");

const app =express();

app.use(express.static("public"));

//HomeSeite
app.get('/home', (request, response)=>{
    response.sendFile(__dirname + '/views/Homepage.html')
})

//AboutSeite
app.get('/about', (request, response)=>{
    response.sendFile(__dirname + '/views/About.html')
})

//Gallery
app.get('/gallery', (request, response)=>{
    response.sendFile(__dirname + '/views/gallery.html')
})



app.listen(3000, ()=>{
    console.log("listening on port 3000")
})