
// 1. npm init
// 2. npm install express
// 3. import newly installed express module (library)
const express = require('express')
const path = require('path')

//4. setup the express.app() to initialise the library
const app = express()

app.use(express.static('public'))
// 5. tell express.app() what it needs to respond to (set a URL route)
app.all('/home', mainRouteHandler)

function mainRouteHandler(request, response) {
    response.sendFile(path.join(__dirname, './views/home.html'))
}

app.all('/about', aboutRouteHandler)

function aboutRouteHandler(request, response) {
    response.sendFile(path.join(__dirname, './views/about.html'))
}

app.all('/recipes', recipesRouteHandler)

function recipesRouteHandler(request, response) {
    response.sendFile(path.join(__dirname, './views/recipes.html'))
}

//6. start the express.app() so that it "listens" to a port
app.listen(5000)

//7. prepare the .html and .img resource

//8. set static files serve
