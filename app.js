// Require Express
const express = require('express')

// Express server handling requests and responses
const app = express()

// Make everything inside of public/ available
app.use(express.static('public'))

// Home Route:
app.get('/home', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`)
})

app.get('/about', (req, res) => {
  res.sendFile(`${__dirname}/views/about.html`)
})

app.get('/works', (req, res) => {
  res.sendFile(`${__dirname}/views/works.html`)
})

// Server Started
app.listen(3000, () => console.log('Server Running!'))