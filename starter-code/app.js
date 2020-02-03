require("dotenv").config();
const express = require("express");
const app = express();
const hbs = require("hbs");

app.use(express.static("./public"));
app.set("views", "./views");
app.set("view engine", "hbs");
// hbs.registerPartials("./views/partials");

// 2 ROUTING

app.get(["/", "/home"], (req, res) => {
  res.render("home");
});

app.get("/projects", (req, res) => {
  res.render("projects");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

// KICKSTART
app.listen(process.env.PORT, () => {
  console.log(
    `app is ready to rock at http://localhost:${process.env.PORT}`
  );
});