const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/home",(request,response,next)=>
response.sendFile(__dirname + "/views/index.html"));



app.get("/about",(request,response,next)=>
    response.sendFile(__dirname + "/views/about.html"));

app.get("/works",(request,response,next)=>
    response.sendFile(__dirname + "/views/works.html"));

app.get("/photoGallery",(request,response,next)=>
    response.sendFile(__dirname + "/views/photoGAllery.html"));

app.listen(3000, () => console.log("listening port 3000"));

