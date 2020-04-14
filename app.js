const express = require('express')

const app = express()

//public directory middleware

app.use(express.static('public'))

//endpoints

app.get('/', (req, res) => {
  console.log(req)
  res.sendFile(`${__dirname}/views/home-page.html`)
})
app.get('/about', (req, res) => {
  console.log(req)
  res.sendFile(`${__dirname}/views/about-page.html`)
})
app.get('/legacy', (req, res) => {
  console.log(req)
  res.sendFile(`${__dirname}/views/legacy-page.html`)
})
app.get('/photo-gallery', (req, res) => {
  console.log(req)
  res.sendFile(`${__dirname}/views/photo-gallery-page.html`)
})

//listener
app.listen(3000, () => console.log('App listening on port 3000'))
