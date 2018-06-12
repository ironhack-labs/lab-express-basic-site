express = require("express");

app = express();

app.get("/", (request, response, next) => {

	response.sendFile(__dirname + "/views/home.html");

});


app.get("/about", (request, response, next) => {

	response.sendFile(__dirname + "/views/about.html");

});


app.get("/gallery", (request, response, next) => {

	response.sendFile(__dirname + "/views/gallery.html");

});


app.use(express.static(__dirname + "/public"));


app.listen(3000, () => {

	console.log("server started listening...");

});