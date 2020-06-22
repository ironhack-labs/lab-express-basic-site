const express = require("express");
const app = express();
const path  = require("path");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (request, response, next) => response.render('home'))

app.get('/about', (request, response, next) => response.render('about'))

app.get('/works',  (request, response, next) => response.render('works'))

app.get('/gallery', (request, response, next) => response.render('gallery'))

app.listen(3000, () => console.log('It´s running')) 
