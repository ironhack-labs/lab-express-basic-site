const express = require("express");
const hbs = require("hbs");

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use("/static", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("HOME");
});

app.get("/about", (req, res) => {
  res.send("ABOUT");
});

app.get("/photo-gallery", (req, res) => {
  res.send("PHOTO-GALLERY");
});

const port = 5555;
app.listen(port, () => console.log(`Ready on port ${port}`));
