require("./config/mongodb");

const createError = require("http-errors");
const express   = require("express");
const hbs       = require("hbs");
const app       = express();
const path      = require("path");
 
const indexRouter = require("./routes/index");
const hsRouter = require("./routes/hot-sauces");

app.locals.welcomeMessage = "Yay, it's a webpage!";

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/hot-sauces", hsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });
  
  module.exports = app;
  

app.get("/", (req, res, next) => res.render("index"));
app.get("/hot-sauces", (req, res, next) => res.render("hot-sauces"));
 
app.listen(3000);
