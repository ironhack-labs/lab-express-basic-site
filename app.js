const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/index.html");
});

app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/about.html");
});

app.get("/work", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/work.html");
});

app.get("/photo", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/photo.html");
});

app.listen(PORT, () => {
//   console.log(`Server running at port ${PORT}`);
});
