const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//Public folder
app.use(express.static("public"));

//Home page:
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/views/home-page.html");
});

//About page
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/views/about.html");
});

//Photo gallery page
app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/public/views/gallery.html");
});

app.listen(port, () => console.log("Server running!!!"));
