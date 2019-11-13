const express = require('express')
const app = express()


app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.send('<h1>Welcome Ironhacker. :)</h1>');
// });
app.get('/', (req, res) => res.sendFile(__dirname + '/views/index-page.html'))
app.get('/principio', (req, res) => res.sendFile(__dirname + '/views/index-page.html'))
app.get('/aqui', (req, res) => res.sendFile(__dirname + '/views/photo-gallery.html'))
app.get('/nosotros', (req, res) => res.sendFile(__dirname + '/views/nosotros.html'))
app.listen(3000, () => console.log('App escuchando'))