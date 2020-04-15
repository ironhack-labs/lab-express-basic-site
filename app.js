const express = require("express");
console.log(typeof express);
const app = express();

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
  // console.log(__dirname);
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/work", (req, res) => {
  // console.log(__dirname);
  res.sendFile(__dirname + "/views/work.html");
});
