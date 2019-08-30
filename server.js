const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname + "/views/partials"));


app.get("/", (req, res)=>{
  res.render("index");
});

app.get("/about", (req, res)=>{
  res.render("about");
});

app.get("/contact", (req, res)=> {
  res.render("contact");
});

const listener = app.listen(4444, ()=> {
  console.log(`server is up @ http://localhost:${listener.address().port}`);
})