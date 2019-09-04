// Import express and create a new instance named app
const express = require('express')
const app = express()

// Static files
app.use(express.static('public'))

// Home
app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/views/home.html`)
})
// About
app.get('/about', (request, response) => {
  response.sendFile(`${__dirname}/views/about.html`)
})
// About
app.get('/gallery', (request, response) => {
  response.sendFile(`${__dirname}/views/gallery.html`)
})

// Server on port 3000
app.listen(3000, () => {
  console.log(`Server on http://localhost:3000`)
})
