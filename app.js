const express = require("express")
const app = express()

app.use(express.static('public'))

app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home.html'))

app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'))

app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'))

app.get('/photoGallery', (request, response, next) => response.sendFile(__dirname + '/views/photoGallery.html'))

app.use((req, res, next) => {
  res.status(404);
  res.send("Page not found")
})

app.listen(3000, () => console.log("Listening on port 3000!"))

