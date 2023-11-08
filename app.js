const express = require("express");

const app = express();
app.listen(3000, () => console.log("My first app listening on port 3000! "));

// our first Route
app.get("/", (request, response) => {
  console.log(request);
  ("lab-express-basic-site/views/home.html");
  response.sendFile(__dirname + "/views/home.html");
});
//
app.get("/", (request, response) => {
  console.log(request);
  ("lab-express-basic-site/views/home.html");
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/", (request, response) => {
  console.log(request);
  ("lab-express-basic-site/views/home.html");
  response.sendFile(__dirname + "/views/works.html");
});

// Server Started
