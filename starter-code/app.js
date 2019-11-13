// Require Express
const express = require("express");

// Express server handling requests and responses
const app = express();

app.use(express.static('public'))
// our first Route:

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/photo", (req, res) => {
  res.sendFile(__dirname + "/views/photo.html");
});

// Server Started
app.listen(3000, () => {
  console.log("My first app listening on port 3000!");
});

//iniciar nodemon