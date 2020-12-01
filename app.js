const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static(__dirname + "/public"));

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, () => {
  console.log("The cool server ! http://localhost:3000");
});
