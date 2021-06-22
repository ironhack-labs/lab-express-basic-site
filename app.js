const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"))
app.all("/", homePageHandler)
app.all("/seasonOne", seasonOneRouteHandler)
app.all("/seasonTwo", seasonTwoRouteHandler)
app.all("/cast", castRouteHandler)


function homePageHandler(request, response) {
    response.sendFile(path.join(__dirname, "/views/home.html"))
}

function seasonOneRouteHandler(request, response) {
    response.sendFile(path.join(__dirname, "/views/season1.html"))
}

function seasonTwoRouteHandler(request, response) {
    response.sendFile(path.join(__dirname, "/views/season2.html"))
}

function castRouteHandler(request, response) {
    response.sendFile(path.join(__dirname, "/views/cast.html"))
}



app.listen(4000)