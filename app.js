require("dotenv").config();
require("./config/dbConfig");
const mongoose = require("mongoose");
const express = require("express");
const hbs = require("hbs");
const path = require("path");
const bodyParser = require('body-parser');

const app = express();

hbs.registerPartials(path.join(__dirname, "views/partials"));
app.use(express.static(path.join(__dirname, "public")));
app.set('views', path.join(__dirname, 'views'));

const baseRouter = require("./routes/baseRoutes");
app.use("/", baseRouter);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(process.env.PORT, () => {
    console.log(`Server listening on http://localhost:${process.env.PORT}`);
});

module.exports = app;