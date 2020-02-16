var express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.static('img'));
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views");



app.get("/", (req, res, next) => res.render("index"));
app.get("/projects", (req, res, next) => res.render("project-page"));
//app.get('/projects', (req, res) => res.render(`${__dirname}/views/project-page`));
//app.get('/contact', (req, res) => res.render(`${__dirname}/views/contact`));


app.listen(4000, function() {
    console.log("Marta portfolio in node.js");
  });