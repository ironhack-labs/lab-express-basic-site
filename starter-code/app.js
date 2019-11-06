const express = require("express");
const app = express();

app.set('view engine', 'hbs');
app.use(express.static("public"));

app.get("/", (request, response) => {
  response.render("home.hbs");
});

// refers to the HTTP GET method
app.get('/about', (request, response) => {
  response.render("about.hbs");
});

// refers to the HTTP GET method
app.get('/gallery', (request, response) => {
  response.render("gallery.hbs");
});

app.listen(3000);