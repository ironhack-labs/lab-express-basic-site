const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response, next) => {
    response.sendFile(__dirname + "/views/Home-page.html");
});

app.get("/about", (request, response, next) => {
    response.sendFile(__dirname + "/views/About-page.html");
});

app.get("/gallery", (request, response, next) => {
    response.sendFile(__dirname + "/views/Photo-gallery-page.html");
});

app.listen(3000, () => {
    console.log("done!");
})