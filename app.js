const express = require("express");
const app = express();
const path = require("path");
const handlebars = require("handlebars");

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home", {
    title: "Frida Kahlo | Home",
    welcomeMessage: "A brief introduction to Frida Kahlo",
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/works", (req, res) => {
  res.render("works");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
