const express = require("express");
const hbs = require("hbs");

const app = express();

hbs.registerPartials(__dirname + "/views/partials");

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use("/static", express.static(__dirname + "/public"));

// Template vars
app.use((req, res, next) => {
  res.locals = {
    titlePage: "HOME - Express"
  };
  next();
});

app.get("/", (req, res) => {
  res.render("");
});

app.get("/about", (req, res) => {
  res.render("", {titlePage: "About - Express"});
});

app.get("/photo-gallery", (req, res) => {
  res.render("", {titlePage: "Gallery - Express"});
});

const port = 5555;
app.listen(port, () => console.log(`Ready on port ${port}`));
