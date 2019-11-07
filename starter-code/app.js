const express = require("express");

const app = express();

// static allows you to make a folder available to get stylesheets or images (only static files!)
app.use(express.static("public"))

app.get("/", (request, response) => {
    response.render("index.hbs");
});

// .get referst to the HTTP GET method
app.get("/news", (request, response) => {
    response.render("news.hbs");
});


// .get referst to the HTTP GET method
app.get("/teachers", (request, response) => {
    response.render("teachers.hbs");
});

// .get referst to the HTTP GET method
app.get("/gelberraum", (request, response) => {
    response.render("gelberraum.hbs ");
});

// .get referst to the HTTP GET method
app.get("/sonnenallee", (request, response) => {
    response.render("sonnenallee.hbs ");
});

// .get referst to the HTTP GET method
app.get("/prices", (request, response) => {
    response.render("prices.hbs");
});

// .get referst to the HTTP GET method
app.get("/workshops", (request, response) => {
    response.render("workshops.hbs");
});

// .get referst to the HTTP GET method
app.get("/retreats", (request, response) => {
    response.render("retreats.hbs");
});

// .get referst to the HTTP GET method
app.get("/events", (request, response) => {
    response.render("events.hbs");
});

// .get referst to the HTTP GET method
app.get("/contact", (request, response) => {
    response.render("contact.hbs");
});

app.listen(3000)