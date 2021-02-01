const express = require("express");
const app = express();

const PORT = 2000;

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res, next) => {
  res.sendFile(__dirname + "/views/works.html");
});

app.listen(PORT, () => {
  console.log(`server is running at PORT ~${PORT}`);
});
