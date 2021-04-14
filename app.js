const express = require('express');
const app = express();
const port = 5500

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html')
})
app.get('/work', (req, res) => {
  res.sendFile(__dirname + '/views/works.html')
})
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html')
})
app.get('/gallery', (req, res) => {
  res.sendFile(__dirname + '/views/gallery.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})