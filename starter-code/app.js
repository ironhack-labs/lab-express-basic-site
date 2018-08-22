const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('public'))

app.get('/', (req, res) => {
  console.log(__dirname)
  res.sendFile(__dirname + '/views/index.html')
})
app.get('/about', (req, res) => {
  console.log(__dirname)
  res.sendFile(__dirname + '/views/about.html')
})
app.get('/gallery', (req, res) => {
  console.log(__dirname)
  res.sendFile(__dirname + '/views/gallery.html')
})

app.listen(3004)

