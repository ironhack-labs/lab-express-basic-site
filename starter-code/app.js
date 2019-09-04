const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (request, response) => {
  console.log(__dirname)
  response.sendFile(`${__dirname}/views/home.html`)
})

app.get('/gallery', (req, res) => {
  res.sendFile(`${__dirname}/views/gallery.html`)
})

app.get('/about', (req, res) => {
  res.sendFile(`${__dirname}/views/about.html`)
})

app.listen(3000, () => {
  console.log(`Server up and running on http://localhost:3000`)
})