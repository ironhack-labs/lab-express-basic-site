const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res, next) => {
	console.log("home requested");
	res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res, next) => {
	console.log("about requested");
	res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res, next) => {
	console.log("works requested");
	res.sendFile(__dirname + "/views/works.html");
});

app.get("/photo-gallery", (req, res, next) => {
	console.log("photo-gallery requested");
	res.sendFile(__dirname + "/views/photo-gallery.html");
});

app.listen(3000, () => {
	console.log("Server listening to port 3000");
});
