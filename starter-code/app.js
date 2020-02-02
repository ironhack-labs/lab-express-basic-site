require("dotenv").config();

const express = require("express");
const app = express();
const hbs = require("hbs");

// INITIAL SETUP
app.use(express.static("./public"));
app.use(express.urlencoded({extended: false})); // above, add req.body => allow you to passe the posted data.
app.set("views", "./views");
app.set("view engine", "hbs");
hbs.registerPartials("./views/partials");

// ROUTING
app.get(["/", "/home"], (req, res) => {
    res.render("home");
  });
  
  app.get("/productos", (req, res) => {
    res.render("productos"); //refer to my views
  });
  
  app.get("/contact", (req, res) => {
    const data = {
      title: "contact",
      js: ["contact"],
      // css:["contact-form"]
    };
    res.render("contact");
  });

  app.post("/contact", (req, res) => {
    console.log("data posted !!!");
    console.log(req.body);
    console.log(req.body.nombre);
    console.log(req.body.email);
    console.log(req.body.mensaje);
    res.redirect("/contact");
  });

// KICKSTART
app.listen(process.env.PORT, () => {
    console.log(
      `app is ready at http://localhost:${process.env.PORT}`
    );
  });
  