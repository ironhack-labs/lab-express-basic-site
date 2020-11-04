const express = require("express")

const app = express()

app.use(express.static("public"))

app.get("/", (request, response) => {
    response.sendFile(`${__dirname}/views/index.html`)
  })

  app.get("/home", (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`)
  })

  app.get("/about", (req, res) => {
    res.sendFile(`${__dirname}/views/about.html`)
  })

  app.get("/gallery", (req, res) => {
    res.sendFile(`${__dirname}/views/gallery.html`)
  })
  
  app.listen(3000)