const express = require("express");
const hbs = require("hbs");
const app = express();

app.use("/public", express.static("public"));

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
  });
  app.get("/photo-gallery", (req, res) => {
    res.render("photo-gallery");
  });

const port = 3000;
app.listen(port, () => console.log(`Ready express on port ${port}`));
