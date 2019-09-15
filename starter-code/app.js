//Variables definition
const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.static("public"));

//Views files
app.get('/', (req,res) => {
  res.sendFile(__dirname + "/views/index.html");
} )
app.get('/about', (req,res) => {
  res.sendFile(__dirname + "/views/about.html")
})
app.get('/gallery', (req,res) => {
  res.sendFile(__dirname + "/views/gallery.html")
})

app.listen(process.env.PORT,  console.log(`Server listening on port ${process.env.PORT}`))