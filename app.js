// HERE IS ONLY SERVER SIDE JS  !!!
const express = require("express");
const hbs = require("hbs");
const app = express();

// define our public folder : where our static assets are located (static assests : images, css, dom scripts, videos ...)
app.use(express.static(__dirname + "/public"));

// let's configure the templating engine :)
// setup the views folder
app.set("views", __dirname + "/views");
// hey app, the views will be rendered with hbs as a templating engine
app.set("view engine", "hbs");

// hbs expected the initial view file to be called layout.hbs

app.locals.copyright = "copy@ironhack/2020 - Squad 911 !";

app.get("/", (req, res) => {
  res.render("home", {
    nodeRocks: true,
    pageTitle: "homepage",
    universalAnswer: 42,
    extraHTMLMarkup: "<p>foo bar baz</p>",
    js: ["challenge-dom-2-1", "foo"],
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    pageTitle: "about my company",
    boss: {
      name: "George",
      lastname: "Abitbol",
      role: "CEO",
    },
    // employees: ["Jill", "Will", "Bill", "Gui"],
    employees: [
      {
        name: "Jill",
        role: "CTO",
      },
      {
        name: "Will",
        role: "Cook",
      },
      {
        name: "Kill",
        role: "Head of Security",
      },
    ],
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    pageTitle: "contact us !",
    numbers: [10, 100, 1000, 10000],
    css: ["mod.form"],
  });
});

app.listen(3000, () => {
  console.log("server is ready ! http://localhost:3000");
});

// express installation steps :
// $ mkdir a-folder
// $ cd a-folder
// $ npm init -y
// $ npm install express
// $ touch app.js
// edit the script
// code the basic app setup

// $ npm run dev
// ADD A VIEWS FOLDER
// Create 3 views html => index.html, about.html, contact.html (with a minimal content)
// replace res.send with res.sendFile(__dirname + "/path/to/your/view.html")

// ADD A PUBLIC FOLDER => will contain our public assets (css, images, videos, audio, DOM scripts, etc.)
