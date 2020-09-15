const express = require("express");
const app = express();
const hbs = require("hbs");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/works", (req, res) => {
  res.render("works");
});

app.listen(8080, () => {
    console.log(`server is running at http://localhost:8080`);
  });
