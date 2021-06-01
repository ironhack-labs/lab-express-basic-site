const { response } = require("express");
const express = require("express");

const app = express();

app.use(express.static("public"));
app.use(express.static("views"));

app.get("/",(request,response)=>{

    response.sendFile(`${__dirname}/views/home.html`)
})

app.get("/home.html",(request,response)=>{

    response.sendFile(`${__dirname}/views/home.html`)
})

app.get("/main.html",(request,response)=>{
    
    response.sendFile(`${__dirname}/views/main.html`)
})

app.get("/bio.html",(request,response)=>{
    
    response.sendFile(`${__dirname}/views/bio.html`)
})

app.get("/gallery.html",(request,response)=>{
    
    response.sendFile(`${__dirname}/views/gallery.html`)
})



app.listen(3000, ()=>{
    console.log("Getting started")
})