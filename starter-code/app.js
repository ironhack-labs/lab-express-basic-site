const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/pages/homepage.html`)
})

app.get('/about', (req, res) => {
  res.sendFile(`${__dirname}/pages/about.html`)
})

app.get('/photo', (req, res) => {
  res.sendFile(`${__dirname}/pages/photo.html`)
})

app.listen(3000, () => {
  console.log(`server on http://localhost:3000`)
})