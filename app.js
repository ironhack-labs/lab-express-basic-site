// CREATE THE SERVER
const express = require("express");
const app = express();

const PORT = 4000;

// static files middleware
app.use(express.static("public"));

// http://localhost:4000/css/main.css

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

// START THE SERVER
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
