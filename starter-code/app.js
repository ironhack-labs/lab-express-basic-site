const express = require('express')
const app = express()
// for static files
app.use(express.static('public'))

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/index.html')
})
app.get('/home', (req, res, next) => {
  res.sendFile(__dirname + '/views/index.html')
})
app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/views/about.html')
})
app.get('/gallery', (req, res, next) => {
  res.sendFile(__dirname + '/views/gallery.html')
})
app.listen(3000, () => {
  console.log('mi app funciona en el puerto 3000')
})
