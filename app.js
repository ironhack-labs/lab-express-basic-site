// step 1 : require dependencies
const express = require("express");
const hbs = require("hbs");

// step 2 : base setup
const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

hbs.registerPartials(__dirname + "/views/partials");

// step 3 : routes handling
app.get("/", (req, res) => {
  res.render("home.hbs", {pageTitle: "Au revoir, Paris !"});
});

app.get("/items", (req, res) => {
  res.render("items.hbs", {
    pageTitle: "Items",
    items: [
      {
        name: "HEMA Electric Kettle",
        photo: "https://www.hema.com/dw/image/v2/BBRK_PRD/on/demandware.static/-/Sites-HEMA-master-catalog/default/dw5d3dafdb/product/80010105_01_001_01.jpg?sw=1058&sh=1200&sm=fit",
        alt: "Kettle",
        color: "Pink",
        specs: "https://www.hema.com/fr-be/manger-cuisiner/cuisiner/electromenager/bouilloire-sans-fil-1.7l-80010105.html"
      }
    ]
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {pageTitle: "About"});
});

app.get("/contact", (req, res) => {
  res.render("contact.hbs", {pageTitle: "Contact"});
});

// step 4 : app listen to kickstart
app.listen(5000);