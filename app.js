const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/public/views/main.html')
})

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/public/views/about.html')
})

app.get('/work', (request, response) => {
  response.sendFile(__dirname + '/public/views/work.html')
})

app.get('/photo', (request, response) => {
  response.sendFile(__dirname + '/public/views/photo.html')
})

app.listen(3000, () => {
  console.log(' si jala')
})
