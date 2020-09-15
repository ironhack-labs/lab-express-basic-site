const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");

//Templating engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
hbs.registerPartials(path.join(__dirname, "views/partials"));


const fakeUSer = {
    name: "Fabien",
    lastname: "Marchand",
};

app.get("/", (req, res) => {
  res.render("home", {
    user: fakeUSer
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    user: fakeUSer
  });
});

app.get("/project", (req, res) => {
    res.render("project", {
      user: fakeUSer
    });
  });

app.get("/contact", (req, res) => {
    res.render("contact", {
      user: fakeUSer
    });
  });
  

app.listen(8080, () => {
  console.log("server is started");
});
