require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

// Model
const GospelSingers = require("./models/gospelSingers");

// Array of singers
const singers = require("./bin/singers");

// Make the link with the mongodb database and create gospel-singers
mongoose
  .connect("mongodb://localhost/gospel-singers", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
//app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

const index = require("./routes/index");
app.use("/", index);

// Create our Movies Model
console.log(singers);
console.log("--------");
pushSomeData = () => {
  GospelSingers.insertMany(singers)
    .then(dbRes => {
      console.log(dbRes);
      dbRes
        .forEach((Singer, i) => console.log(Singer.name, i))
        .catch(dbErr => {
          console.log(dbErr);
        });
    })
    .catch(dbErr => {
      console.log(dbErr);
    });
};

//pushSomeData();

module.exports = app;
