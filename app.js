// Express Setup
const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public")); // When do we add __dirname and when don't we?

// Handlebars Setup
const handlebars = require('hbs');
app.set('view engine', 'hbs');




// Routes
app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => res.render ("about"));
app.get("/works", (req, res) => res.render("works"));
app.get("/gallery", (req, res) => res.render("gallery"));




app.listen(3000, () => {
    console.log('Listening...👂🏽');
})