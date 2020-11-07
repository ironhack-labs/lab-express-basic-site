const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response, next) => {
    response.send("<h1>Paul Auster</h1>")
})

app.get("/home", (request, response, next) => {
    response.sendFile(__dirname + "/public/views/home-page.html")
})

app.get("/main", (request, response, next) => {
    response.sendFile(__dirname + "/public/views/main-page.html")
})

app.listen(3003, () => {
    console.log("This app is listening on port 3000.")
});