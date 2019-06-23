const express = require("express");
const app = express();
const hbs = require("hbs");
const MessageModel = require("./models/message");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/lab-express-basic-site", {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views"); // creates an absolute path pointing to a folder called "views"
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  let name = "Cecile Pham";
  let job = "Ironhackeuse";
  let bigWrapper = "bg-home";
  let navbar = "navbar-home";
  // let headerClass = "header-home";
  res.render("home", { name, job, bigWrapper, navbar });
});

app.get("/about", (req, res) => {
  let bigWrapper = "bg-about";
  let navbar = "navbar";
  res.render("about", { bigWrapper, navbar });
});
app.get("/contact", (req, res) => {
  let navbar = "navbar";
  let bigWrapper = "bg-contact";
  res.render("contact", { navbar, bigWrapper });
});
app.post("/add-message", (req, res) => {
  MessageModel.create(req.body)
    .then(dbRes => {
      console.log("successfully submited message", dbRes);
      res.redirect("/contact");
    })
    .catch(err => {
      console.log("error, sending message didn't work", err);
      res.redirect("/contact");
    });
});

// if (req.url === "/") {
//   res.write("Hello, world!");
//   res.end();
// } else if (req.url === "/about") {
//   res.write("My name is Nicolas Delort");
//   res.end();
// } else if (req.url === "/gallery") {
//   res.write("gallery");
//   res.end();
// } else {
//   res.statusCode = 404;
//   res.write("404 Page");
//   res.end();
// }

// if (app.url === "/") {
//   document.getElementsByTagName("body").classList.add("is-home");
// }

app.listen(1111, () => {
  console.log("server is ready to serve content @: http://localhost:1111");
});
