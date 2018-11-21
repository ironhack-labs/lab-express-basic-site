const express = require("express")
const app = express()


// Que use el folder público para static files
app.use(express.static("public"))

app.get("/",(req,res) => {
  res.sendFile(__dirname + "/views/home.html")
})

app.get("/about",(req,res) => {
  res.sendFile(__dirname + "/views/about.html")
})

app.get("/gallery",(req,res) => {
  res.sendFile(__dirname + "/views/gallery.html")
})

app.listen(3000, () => {
  console.log("ES 3000")
})