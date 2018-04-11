const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (request, response, next)=>{
    response.sendfile(__dirname + "/views/home.html");
});

app.get("/about", (request, response, next) => {
    response.sendfile(__dirname + "/views/about.html");
})

app.get("/photo", (request, response, next)=>{
    response.sendfile(__dirname + "/views/photo.html");
});

app.listen(3000, ()=>{
    console.log("works");
});