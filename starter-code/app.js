const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (request, response) => {
  console.log(__dirname)
  response.sendFile(`${__dirname}/views/home-page.html`)
})

app.get('/about', (request, res) => {
  res.sendFile(`${__dirname}/views/about-page.html`)
})

app.get('/photos', (request, res) => {
  res.sendFile(`${__dirname}/views/photos-page.html`)
})

app.listen(3000),
  () => {
    console.log(`server on: http://localhost:3000`)
  }
