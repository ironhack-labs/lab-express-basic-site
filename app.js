// require dependncies
const express = require("express");
const hbs = require("hbs");
// initialize app object
const app = express();

// do app config
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// setup app routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/40", (req, res) => {
  res.render("40");
});

app.get("/mike-dean", (req, res) => {
    res.render("mike-dean");
  });

app.get("*", (req, res) => {
  res.send("sorry not found");
});

// kickstart the http server
app.listen(8888, () => {
  console.log("ready @ http://localhost:8888");
});
