const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/bienvenidos', (req, res) => res.send('<h1>Bienvenid@s! Primera App Express</h1>'))

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))
app.get('/dog2', (req, res) => res.sendFile(__dirname + '/views/dog2.html'))
app.get('/doglist', (req, res) => res.sendFile(__dirname + '/views/doglist.html'))

app.listen(3000, () => console.log('App escuchando'))