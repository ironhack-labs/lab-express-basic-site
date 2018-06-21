const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/muse", function (request, response, next){
    response.send(`
    <link rel="stylesheet" href="/public/style.css />

    <h1>Muse</h1>
    <p>The best Music</p>

    <img src="http://localhost:3000/muse.jpg />
    `);
});

app.get("/", (request, response, next) => {
    response.sendFile(__dirname + "/starter-code/views/about.html");
});

app.get("/home", (request, response, next) => {
    response.sendFile(__dirname + "/starter-code/views/home-page.html");
});

app.listen(3000, () => {
    console.log("I love Muse!");
});