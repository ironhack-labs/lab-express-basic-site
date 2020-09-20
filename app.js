// ENV VARIABLES
require("dotenv").config();

// DATABASE CONNECTION
require("./config/mongodb");

// REQUIRED DEPENDENCIES
const express = require("express")
const app = express()
const hbs = require("hbs");

// Exported Data


// create path to public and views which are the website ''data''
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");



// BODY PARSER HERE:
// below mandatory to expose the posted data in req.body (sync)
app.use(express.urlencoded({ extended: false }));
// below mandatory to expose the posted data in req.body (async => AJAX)
app.use(express.json());

app.use(require("./routes/pages"));
app.use("api", require("./routes/api"));

module.exports = app;
