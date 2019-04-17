const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  console.log(req)
  res.sendFile(`${__dirname}/starter-code/views/home-page.html`)
})

app.get('/about', (req, res) => {
  res.sendFile(`${__dirname}/starter-code/views/about-page.html`)
})

app.get('/gallery', (req, res) => {
  res.sendFile(`${__dirname}/starter-code/views/gallery_page.html`)
})

app.listen(3000, () => {
  console.log('Running on port 3000')
}) 