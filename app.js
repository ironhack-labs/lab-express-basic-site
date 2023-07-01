const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/homepage", (req, res, next) => {
  console.log(req);
  res.sendFile(__dirname + "/views/index.html");
});

// git s

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});

app.listen(3000, () => console.log("My first app listening on port 3000! "));
