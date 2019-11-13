// Start express
const express = require("express");

// assign to app express
const app = express();

const morgan = require("morgan");
const logger = morgan("tiny");
var path = require("path");

// Middleware --> to get All the files into the public folder.
app.use(logger);

// I am in starter code for that reason I have to go up one level.
// why has to be only one point and not two points??
app.use(express.static("./public"));

app.use((request, responser, next) => {
  console.log("First instruction to execute");
  next();
});

app.get("/", (request, response, next) => {
  //   response.writeHead(301, {Location : "/public/views/index.html"});
  response.send("<h1>Welcome Ironhacks</h1>");
  response.end();
});

app.get("/home", (request, response, next) => {
  // this one is working
  response.sendFile(path.resolve("public/views/index.html"));

  // Is failing something with the path in the case below.
  //   res.sendFile(__dirname + "/../public/views/index.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(path.resolve("public/views/about.html"));
});

app.get("/gallery", (request, response, next) => {
  response.sendFile(path.resolve("public/views/gallery.html"));
});

// you need to create this listen to start the server listening on this port.
app.listen(3000, () => {
  console.log("Server running");
});
