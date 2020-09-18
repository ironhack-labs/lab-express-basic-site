require("dotenv").config();

const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path")

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");

// ROUTING 
const pageRouter = require("./routes/pages");
app.use(pageRouter);

app.listen(process.env.PORT, () => {
  console.log(`server ready to rock at http://localhost:${process.env.PORT}`);
});

// -----------------


// const path = require("path");
// const hbs = require("hbs");

// app.set("views", path.join(__dirname, "views")); // where are the actual pages (./views) ?
// app.set("view engine", "hbs"); // which template engine will we use ? hbs
// app.use(express.static(path.join(__dirname, "public"))); // static files (public for browsers)
// hbs.registerPartials(path.join(__dirname, "views/partials"));

// app.get("/", (req, res) => {
//   //middleware
//   res.render("home");
// });

// app.get("/about", (req, res) => {
//   res.render("about");
// });

// app.get("/goodthings", (req, res) => {
//   res.render("goodthings", {
//     js: ["dom-goodthings"],
//   });
// });

// app.listen(8888, () => {
//   console.log(`server is running at http://localhost:8888`);
// });


// // TO DO: 
// // - make it responsive!!
// // - add decoration on clik on nav link
