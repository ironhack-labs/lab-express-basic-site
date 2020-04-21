const express = require("express");

const app = express(); // server object that listens for request
const PORT = 3000;

// Sets a middleware to be used during the request/reponse
// middleware for static files
app.use(express.static("public"));

//       /index         GET    - route/endpoint
app.get("/", (req, res, next) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/public/views/index.html");
});

//       /about    GET     - route/endpoint
app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/about.html");
});

//       /about    GET     - route/endpoint
app.get("/works", (req, res, next) => {
    res.sendFile(__dirname + "/public/views/works.html");
  });

app.listen(PORT, () => {
  //console.log(`Server running at port ${PORT}`);
});