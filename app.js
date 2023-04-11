const express = require("express");
const app = express();
const port = 3005;

// Register public folder and send it to the client

app.use(express.static(__dirname + "/public"));

// Create routes

app.get("/", (req, res) => {
  console.log("This is the homepage");
  // res.send("<h1>This is the homepage</h1>")

  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
