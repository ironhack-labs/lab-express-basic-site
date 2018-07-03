const express = require('express')
const app = express()


app.use(express.static('public'))
app.use(express.static(__dirname + '/node_modules/jquery/dist'))
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'))


app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/index.html');
})


app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/gallery.html');
})


app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});



app.listen(3000, () => {})
