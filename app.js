const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(path.resolve("./views/index.html"));
});

app.get("/about", (req, res) => {
	res.sendFile(path.resolve("./views/about.html"));
});

app.get("/works", (req, res) => {
	res.sendFile(path.resolve("./views/works.html"));
});

app.get("/photo-gallery", (req, res) => {
	res.sendFile(path.resolve("./views/photo-gallery.html"));
});

app.listen(3000, () => console.log("server is running"));
