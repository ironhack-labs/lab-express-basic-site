const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");
const mongoose = require("./config/mongodb")
const bodyParser   = require('body-parser');
const jade = require("jade");

const logger = require("morgan");
const cookieParser = require("cookie-parser");
const indexRouter = require("./routes/index")
const bookRouter = require("./routes/book")
const aboutRouter = require("./routes/about")
const exercisesRouter = require("./routes/exercises")
const newsletterRouter = require("./routes/newsletter")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'html');
app.set('view engine', 'jade');

app.use("/", indexRouter)
app.use("/books", bookRouter)
app.use("/about", aboutRouter)
app.use("/exercises", exercisesRouter)
app.use("/newsletter", newsletterRouter)


app.get("*", (req, res) => {
    res.send("404, sorry page not found!");
});

app.listen(3000, () => {
    console.log("Your website is live @ http://localhost:3000");
});



module.exports = app;