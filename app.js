//require dependencies
const express= require("express");
const hbs=require("hbs");

// put the base setup
const app= express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
// hbs.registerPartials("partials_absolute_path");
// hbs.registerPartials(__dirname + "/views/partials");



//routes handling
app.get("/", (req, res, next) => {
    res.render("home.hbs");  
  });
  
  app.get("/about", (req, res) => {
    res.render("about.hbs");
  });
  
  app.get("/works", (req, res) => {
    res.render("works.hbs")
  });

//   app.get("/PhotoGallery", (req, res) => {
//     res.render("photogallery.hbs")
//   });
//app listen to kickstart
app.listen(3000);