const express = require("express");
const port = 3000;
const app = express();

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/index.html");
});
app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/about.html");
});
app.get("/works", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/works.html");
});
app.get("/gallery", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/gallery.html");
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
