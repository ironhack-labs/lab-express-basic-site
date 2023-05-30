/** @format */

const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/home", (req, res, next) => {
	res.sendFile(__dirname + "/views/home-page.html");
});

app.get("/about", (req, res, next) => {
	res.sendFile(__dirname + "/views/about-page.html");
});

app.get("/gallery", (req, res, next) => {
	res.sendFile(__dirname + "/views/gallery-page.html");
});

app.get("/podcasts", (req, res, next) => {
	res.sendFile(__dirname + "/views/podcasts-page.html");
});

app.listen(3000, () => {
	console.log("server listening on port 3000...");
});
