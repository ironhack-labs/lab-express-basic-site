//Requite Express
const express = require("express");
const { request } = require("express");
//Express handling requests and responses
const app = express();
//Making everything in public available
app.use(express.static('public'));
//Home page route
app.get("/",(request,response)=>response.sendFile(__dirname + `/views/index.html`));
//About route
app.get("/about",(request,response)=>response.sendFile(__dirname + `/views/about.html`));
//works route
app.get("/works",(request,response)=>response.sendFile(__dirname + `/views/works.html`));



app.listen(3000,() => console.log("I am working on port 3000!"))
