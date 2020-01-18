const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (request, response) => {
  response.render("home", { title: "HOME" });
});

app.get("/about", (request, response) => {
  response.render("about", { title: "ABOUT" });
});

app.get("/gallery", (request, response) => {
  response.render("gallery", { title: "GALERÍA" });
});

const port = 3000;
app.listen(port, () => console.log(`Ready on port ${port}`));
