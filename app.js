const express = require("express");

// We create the server we wiil use for handling requests and responses

const app = express();

// MIDDLEWARE for static files - Files that are used by all the app and that are
// static. It has to be specified the folder

// In the public folder we save only the resources that are displayed to client or needed to display (html, css, img, video, js for html....)
app.use(express.static("public"));

// What we want the server to do when requested
// example.com  127.0.0.1:3000
// example.com/about 127.0.0.1:300/about
// ROUTES or endpoints ../xxxx

app.get("/", (req, res, next) => {
  // req= request, res= response, next=

  // Creating the request
  // console.log("req:", req);
  // Sending a file as request
  res.sendFile(__dirname + "/public/views/index.html");
});

app.get("/index.html", (req, res, next) => {
  // req= request, res= response, next=

  // Creating the request
  // console.log("req:", req);
  // Sending a file as request
  res.sendFile(__dirname + "/public/views/index.html");
});

app.get("/about.html", (req, res, next) => {
  // req= request, res= response, next=

  // Creating the request
  // console.log("req:", req);
  // Sending a file as request
  res.sendFile(__dirname + "/public/views/about.html");
});

app.get("/works.html", (req, res, next) => {
  // req= request, res= response, next=

  // Creating the request
  // console.log("req:", req);
  // Sending a file as request
  res.sendFile(__dirname + "/public/views/works.html");
});

app.get("/gallery.html", (req, res, next) => {
  // req= request, res= response, next=

  // Creating the request
  // console.log("req:", req);
  // Sending a file as request
  res.sendFile(__dirname + "/public/views/gallery.html");
});

// Start the server

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
