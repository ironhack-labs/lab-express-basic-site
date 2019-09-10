const express = require("express")
const app = express()

const PORT = 3000

app.use(express.static("public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html")
})

app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/views/gallery.html")
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
