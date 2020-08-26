const express = require("express")

// generamos una instancia de express
const app = express()

//Aca le decimos a express que use la carpeta public como archivos publicos del server
app.use(express.static("public"))

//aca colocamos nuestras rutas
/* app.get("/", (req, res) => {
  // console.log(__dirname)
  res.sendFile(`${__dirname}/views/index.html`)
})  */

app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/index.html'))

/* app.get("/about", (req, res, next) => {
  res.sendFile(`${__dirname}/views/about.html`) */
  app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'))


  app.get('/work', (request, response, next) => response.sendFile(__dirname + '/views/work.html'))

// Ponemos al server a escuchar las peticiones
app.listen(3000, () => {
  console.log("listening on: http://localhost:3000")
})