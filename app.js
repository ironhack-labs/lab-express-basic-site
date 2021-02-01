const express = require("express");
const app = express();

const PORT = 3010;

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "views/home.html");
});

app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "views/about.html");
});

app.get("/works", (req, res, next) => {
  res.sendFile(__dirname + "views/works.html");
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
