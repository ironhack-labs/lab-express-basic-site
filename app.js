const path = require ("path")

const express = require("express")

const app = express()

app.use(express.static("public"))

app.all("/HansZimmer", mainPageHandler)

function mainPageHandler(request, response){
    response.sendFile(path.join(__dirname, '/public/index.html'))
}

app.all("/about", aboutPageHandler)

function aboutPageHandler(request, response){
    response.sendFile(path.join(__dirname, '/public/about.html'))
}

app.all("/works", workPageHandler)

function workPageHandler(request, response){
    response.sendFile(path.join(__dirname, '/public/works.html'))
}

app.all("/photoGallery", photoGalleryPageHandler)

function photoGalleryPageHandler(request, response){
    response.sendFile(path.join(__dirname, '/public/photoGallery.html'))
}

app.listen(4000)