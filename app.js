const express = require("express");

const app = express();
app.use(express.static('public'));

//Home route
app.get("/", (request,response)=>{
    response.sendFile(__dirname + "/views/home.html");
})

//About
app.get("/about", (request,response)=>{
    response.sendFile(__dirname + "/views/about.html");
})

//photo gallery
app.get("/photoGallery", (request,response)=>{
    response.sendFile(__dirname + "/views/photoGallery.html");
})

//Work
app.get("/work", (request,response)=>{
    response.sendFile(__dirname + "/views/work.html");
})

app.listen(3000, ()=>{
    console.log("App listening on port 3000");
})