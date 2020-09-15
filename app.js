const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

app.set("views", path.join(__dirname, "views")); // where are the actual pages (./views) ?
app.set("view engine", "hbs"); // which template engine will we use ? hbs
app.use(express.static(path.join(__dirname, "public"))); // static files (public for browsers)
hbs.registerPartials(path.join(__dirname, "views/partials"));

app.get("/", (req, res) => {
  //middleware
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/goodthings", (req, res) => {
  res.render("goodthings", {
      js: ["dom-goodthings"]
  });
});

app.get("/works", (req, res) => {
  res.render("works");
});

app.listen(8888, () => {
  console.log(`server is running at http://localhost:8888`);
});
