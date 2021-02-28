require("dotenv").config();
const express = require("express");
const hbs = require("hbs");
const MovieModel = require("./models/Movie.model");

const app = express();

// SETUP
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

require("./config/mongodb");

// ROUTES
const indexRoute = require("./routes/index");
const moviesRoute = require("./routes/movies");
app.use('/', indexRoute);
app.use('/movies', moviesRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT} !`);
})