require("dotenv").config();
require("./config/mongodb");

const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");

// BODY PARSER
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ROUTING
const pageRouter = require("./routes/pages");
app.use(pageRouter);

app.listen(process.env.PORT, () => {
  console.log(`server ready to rock at http://localhost:${process.env.PORT}`);
});

module.exports = app;
