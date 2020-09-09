const express = require("express");

const app = express();

// Make everything inside of public/ available
app.use(express.static("public"));

// Home Route:
app.get("/", (req, res, next) => res.sendFile(__dirname + "/public/views/index.html"));

// About Route
app.get("/about", (req, res, next) => res.sendFile(__dirname + "/public/views/about.html"));

app.get("/work", (req, res, next) => res.sendFile(__dirname + "/public/views/work.html"));

app.get("/gallery", (req, res, next) => res.sendFile(__dirname + "/public/views/gallery.html"));

app.listen(3000);
