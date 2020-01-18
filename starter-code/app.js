const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use("/static", express.static(__dirname + "/public"));

app.get("/", (request, response) => {
  response.render("home");
});

app.get("/about", (request, response) => {
  response.render("about");
});

app.get("/gallery", (request, response) => {
  response.render("gallery");
});

const port = 3000;
app.listen(port, () => console.log(`Ready on port ${port}`));
