const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("layout");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/works", (req, res) => {
    res.render("works");
});

app.get("/gallery", (req, res) => {
    res.render("gallery");
});

app.get("*", (req, res) => {
    res.send("sorry not found");
  });


  app.listen(4000, () => {
    console.log("server started @ http://localhost:4000");
  });