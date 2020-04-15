const express = require("express");
const app = express();
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home-page.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about-page.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works-page.html");
});
