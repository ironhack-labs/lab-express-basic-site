const express = require('express')

const app = express()
const port = 3000

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})


app.get('/views/about.html', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
})


app.get('/views/gallery.html', (req, res) => {
  res.sendFile(__dirname + '/views/gallery.html');
})



app.listen(port, () => {
  console.log(`App escuchando en el puerto ${port}`)
});
