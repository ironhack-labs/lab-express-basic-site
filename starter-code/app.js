const express = require("express");
const hbs = require("hbs");
const app = express();

//Paginas

app.get("/", (req,res) =>{
  res.render("home")
})

app.get("/about", (req,res) =>{
  res.render("about")
})

app.get("/gallery", (req,res) =>{
  res.render("gallery")
})

//Encender servidor
const port = 3000;
app.listen(port, () => console.log(`Ready on port ${port}`));

//views
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

//static
app.use("/static", express.static(__dirname + "/public"));