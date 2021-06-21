const express = require("express");
const app = express();

app.use(express.static("public"));


app.get('/home', (request, response) => {
    response.sendFile(__dirname + "/views/home.html");
})

app.get('/about', (request, response) => {
    response.sendFile(__dirname + "/views/about.html");
})

app.get('/works', (request, response) => {
    response.sendFile(__dirname + "/views/works.html");
})

app.listen(8000, () => console.log("server listening on port 8000"));