const express = require("express");



const app = express();



app.use(express.static("public"));



app.get("/", (request, response, next) =>{
    response.sendFile(__dirname + "/views/index.html");
});



app.get("/lifestyle", (request, response, next) =>{
    response.sendFile(__dirname + "/views/lifestyle.html");
});

app.get("/coolfacts", (request, response, next) =>{
    response.sendFile(__dirname + "/views/coolfacts.html");
});


app.get("/galery", (request, response, next) =>{
    response.sendFile(__dirname + "/views/galery.html");
});

app.listen(3000, () =>{
    console.log("I'm listening!");
})