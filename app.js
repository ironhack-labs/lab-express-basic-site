//require express
const express = require("express");

//express server handling requests and responses
const app = express();

//make everything in public/ available
app.use(express.static("public"));

//set home page
app.get("/home", (request, response, next) =>
  response.sendFile(__dirname + "/views/home.html")
);
//set about page
app.get("/about", (request, response, next) =>
  response.sendFile(__dirname + "/views/about.html")
);
//set works page
app.get("/works", (request, response, next) =>
  response.sendFile(__dirname + "/views/works.html")
);

//server starting
app.listen(3000, () => console.log("Express lab is working!"));
