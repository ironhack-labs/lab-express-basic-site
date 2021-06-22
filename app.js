const path = require ("path")

const express = require("express")

const app = express()

app.use(express.static("public"))

app.all("/HansZimmer", mainPageHandler)

function mainPageHandler(request, response){
    response.sendFile(path.join(__dirname, '/public/index.html'))
}

app.listen(4000)