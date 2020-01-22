const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

app.use("/static", express.static(__dirname + "/public"));

const concerts = [
  { city: "New York City", date: "March 30" },
  { city: "Chicago", date: "April 4" },
  { city: "Denver", date: "April 8" },
  { city: "Phoenix", date: "April 13" },
  { city: "Monterrey", date: "April 22" },
  { city: "Mexico City", date: "April 25" },
  { city: "Glasgow", date: "June 19" },
  { city: "Manchester", date: "June 20" },
  { city: "London", date: "June 23" },
  { city: "Amsterdam", date: "July 6" },
  { city: "Milan", date: "July 9" },
  { city: "Berlin", date: "July 14" }
];

app.use((req, res, next) => {
  res.locals = {
    pageTitle: "Radiohead tour 2020"
  };
  next();
});

app.get("/", (req, res) => {
  res.render("index", { concerts });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/gallery", (req, res) => {
  res.render("gallery");
});

const port = 3000;
app.listen(port, () => console.log(`Express listening on port ${port}`));
