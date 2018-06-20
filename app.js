const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/",(request, response, next)=>{
    response.sendFile(__dirname +"/views/home-page.html");
});

app.get("/about",(request, response, next)=>{
    response.sendFile(__dirname +"/views/about-page.html");
});

app.get("/photogalery",(request, response, next)=>{
    response.sendFile(__dirname +"/views/photogalery-page.html");
});

app.listen(3000,()=>{
    console.log("I'm listening!");
});