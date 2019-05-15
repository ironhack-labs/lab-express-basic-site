const express = require('express')

const app = express()
const port = 3000

app.use(express.static('public'))
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
  res.render('index');
})


app.get('/views/about.html', (req, res) => {
  res.render('about')
})


app.get('/views/gallery.html', (req, res) => {
  res.render('gallery')
})



app.listen(port, () => {
  console.log(`App escuchando en el puerto ${port}`)
});
