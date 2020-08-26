const express = require("express")

//paso 1 -> express
const app = express()

app.use(express.static("public"))

app.get("/", (req, res) => {
    // console.log(__dirname)
    res.sendFile(`${__dirname}/views/index.html`)
  })
  
  app.get("/peng", (req, res) => {
    res.sendFile(`${__dirname}/views/peng.html`)
  })

  app.get("/transient", (req, res) => {
    res.sendFile(`${__dirname}/views/transient.html`)
  })

  app.get("/mars", (req, res) => {
    res.sendFile(`${__dirname}/views/mars.html`)
  })

  app.get("/emperor", (req, res) => {
    res.sendFile(`${__dirname}/views/emperor.html`)
  })

  app.get("/dots", (req, res) => {
    res.sendFile(`${__dirname}/views/dots.html`)
  })

  app.get("/cobra", (req, res) => {
    res.sendFile(`${__dirname}/views/cobra.html`)
  })

  app.get("/sound-dust", (req, res) => {
    res.sendFile(`${__dirname}/views/sound-dust.html`)
  })

  app.get("/margerine", (req, res) => {
    res.sendFile(`${__dirname}/views/margerine.html`)
  })

  app.get("/chemical", (req, res) => {
    res.sendFile(`${__dirname}/views/chemical.html`)
  })

  app.get("/not-music", (req, res) => {
    res.sendFile(`${__dirname}/views/not-music.html`)
  })


  
  
  // Ponemos al server a escuchar las peticiones
  app.listen(3000, () => {
    console.log("listening on: http://localhost:3000")
  })