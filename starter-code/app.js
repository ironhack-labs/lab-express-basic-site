const express = require("express");

const app = express();

app.listen(2500, () =>{
    console.log("Our server is REady!")
})


app.use(express.static(__dirname + "/public"));


app.get("/home-page", (request, response, next) => {
    response.sendFile(__dirname + "/views/home-page.html");
})

app.get("/bio", (request, response, next) => {
    response.sendFile(__dirname + "/views/bio-page.html");
    
});
app.get("/photo", (request, response, next) => {
    response.sendFile(__dirname + "/views/img-page.html");
})