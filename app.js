const express = require("express");
const app = express();

/** Configure view engine */
app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  const name = "Nico";
  res.render("home", {
    name: name,
  });
});

app.get("/about", (req, res, next) => {
  res.render("about");
});

app.get("/works", (req, res, next) => {
  res.render("works");
});

app.get("/photogallery", (req, res, next) => {
  const name = "Nico";
  res.render("photogallery", {
    name: name,
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Application running at pot: ${port}`);
});
