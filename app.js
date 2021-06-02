const express = require("express");

const app = express();

//public
app.use(express.static("public"));

//Get es para solicitar info
app.get("/", (request, response)=>{
    response.sendFile(`${__dirname}/views/index.html`);
});

app.get("/works", (request, response)=>{
    response.sendFile(`${__dirname}/views/works.html`);
});

app.get("/about", (request, response)=>{
    response.sendFile(`${__dirname}/views/about.html`);
});

//Para correr el server (3000=puerto)
app.listen(3000,()=> {
    console.log("el server esta corriendo");
});