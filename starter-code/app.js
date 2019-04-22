const express = require('express')

const app = express();

app.use(express.static('public'))

app.get('/', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/home.html')
})

app.get('/photogallery', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/photogallery.html')
})

app.get('/about', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/about.html')
})

app.listen(3000, () => {
  console.log('My app is alive!')
})