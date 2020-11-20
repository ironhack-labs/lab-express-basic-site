//Require Express
const { response } = require('express');
const express = require('express');
const { request } = require('http');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

//our first route
app.get("/", (request, response, next)=> response.sendFile(__dirname + "/public/views/home.html"))

//about me route
app.get("/aboutme", (request, response, next)=> response.sendFile(__dirname + "/public/views/aboutme.html"))

//works route
app.get("/works", (request, response, next)=> response.sendFile(__dirname + "/public/views/works.html"))

//photogallery route
app.get("/gallery", (request, response, next)=> response.sendFile(__dirname + "/public/views/photogallery.html"))

//started server
app.listen(3000, ()=> console.log("My first app listening on port 3000"))