// Require Express
const express = require("express");

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available/static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/images", express.static(__dirname + "public/images"));

// our first Route:
app.get(
  "",
  (request, response, next) =>
    response.sendFile(__dirname + "/views/index.html")
  // response.send("Hello world")
);

app.get(
  "/about",
  (request, response, next) =>
    response.sendFile(__dirname + "/views/about.html")
  // response.send("Hello world")
);

app.get(
  "/gallery",
  (request, response, next) =>
    response.sendFile(__dirname + "/views/gallery.html")
  // response.send("Hello world")
);

app.get(
  "/work",
  (request, response, next) => response.sendFile(__dirname + "/views/work.html")
  // response.send("Hello world")
);
// Server Started
app.listen(3000, () => console.log("My first app listening on port 3000!"));
