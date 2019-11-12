const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(__dirname + '/view/index.html'))
app.get('/about', (req, res) => res.sendFile(__dirname + '/view/aboutme.html'))
app.get('/gallery', (req, res) => res.sendFile(__dirname + '/view/gallery.html'))


app.listen(3000, () => console.log('App listening'))