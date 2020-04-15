const express = require("express");
const app = express();
app.use(express.static("public"));
app.listen(3000, () => {
  console.log("server listening");
});
app.get("/About", (req, res) => {
  res.sendfile(__dirname + "/views/About.html");
});
app.get("/Home", (req, res) => {
  res.sendfile(__dirname + "/views/Home.html");
});
app.get("/Works", (req, res) => {
  res.sendfile(__dirname + "/views/Works.html");
});
app.get("/Gallery", (req, res) => {
  res.sendfile(__dirname + "/views/Photo-Gallery.html");
});
