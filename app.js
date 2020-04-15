const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/public/views/index.html')
})

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/public/views/about.html')
})

app.get('/works', (request, response) => {
  response.sendFile(__dirname + '/public/views/works.html')
})

app.get('/gallery', (request, response) => {
  response.sendFile(__dirname + '/public/views/gallery.html')
})

app.listen(3000, () => {
  console.log('Server Running on http://localhost:3000')
})
