const express = require('express')

const app = express()
const port = 3000

app.use(express.static('public'))




app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home-page.html');
})


app.get('/story', (req, res) => {
  res.sendFile(__dirname + '/views/story-page.html');
});

app.get('/gallery', (req, res) => {
  res.sendFile(__dirname + '/views/gallery-page.html');
});



app.listen(port, () => {
  console.log(`App escuchando en el puerto ${port}`)
});
