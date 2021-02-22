const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");



app.get("/", (request,response) =>{
  response.render("home");
  
});

app.get("/about", (request,response) =>{
  response.render("about");
});
app.get("/works", (request,response) =>{
  
  response.render("works");
});

app.listen(9955, () => {
  console.log("ready @ http://localhost:9955");
});


