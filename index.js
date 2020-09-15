const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname + "/views"));
hbs.registerPartials(__dirname + "/views/partials");


app.get("/", (req, res) => {
    //middleware
    res.render("home");
  });
  
  app.listen(8888, () => {
    console.log(`server is running at http://localhost:8888`);
  });


  app.get("/about", (req, res) => {
    res.render("about", {
      js: ["about-DOM"],
    });
  });

  app.get("/works", (req, res) => {
    res.render("works", {
      js: ["works-DOM"],
    });
  });