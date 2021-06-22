const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"))
app.all("/", homePageHandler)


function homePageHandler(request, response) {
    response.sendFile(path.join(__dirname, "/views/home.html"))
}


app.listen(4000)