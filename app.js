const express = require("express");

const app = express();

// make public file available
app.use(express.static("public"));

// url gets
app.get("/", (req, res, next) => {
  console.log(req.url);
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (req, res, next) => {
  console.log(req.url);
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/gallery", (req, res, next) => {
  console.log(req.url);
  res.sendFile(__dirname + "/views/gallery.html");
});

// server listen
app.listen(4000, () => {
  console.log("Server started listening at 4000")
})