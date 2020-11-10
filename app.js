const express = require('express');
const { dirname } = require("path");
const app = express();
app.use(express.static("public"));

app.listen(3000, () => console.log("My first app listening on port 3000!"));

app.get('/home', (request, response) => response.sendFile(__dirname+"/views/home.html"));
app.get('/about', (request, response) => response.sendFile(__dirname+"/views/about.html"));
app.get('/works', (request, response) => response.sendFile(__dirname+"/views/works.html"));