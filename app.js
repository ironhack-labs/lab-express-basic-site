
// 1. npm init
// 2. npm install express
// 3. import newly installed express module (library)
const path = require('path')

const express = require('express')

//4. setup the express.app() to initialise the library
const app = express()

// 5. tell express.app() what it needs to respond to (set a URL route)
app.all('/', mainRouteHandler)

function mainRouteHandler(request, response) {
    response.sendFile(path.join(__dirname, 'home.html'))
}

app.all('/about', aboutRouteHandler)

function aboutRouteHandler(request, response) {
    response.send(`<h1>About: Gaz Oakley</h1>`)
}

app.all('/works', worksRouteHandler)

function worksRouteHandler(request, response) {
    response.send(`<h1>Recipes</h1>`)
}

app.all('/gallery', galleryRouteHandler)

function galleryRouteHandler(request, response) {
    response.send(`<h1>Gallery</h1>`)
}

//6. start the express.app() so that it "listens" to a port
app.listen(5000)

//7. prepare the .html and .img resource

//8. set static files serve
app.use(express.static('public'))