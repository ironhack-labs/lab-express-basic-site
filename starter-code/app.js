const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))
app.get('/james', (req, res) => res.sendFile(__dirname + '/views/james.html'))
app.get('/lars', (req, res) => res.sendFile(__dirname + '/views/lars.html'))
app.get('/kirk', (req, res) => res.sendFile(__dirname + '/views/kirk.html'))
app.get('/robert', (req, res) => res.sendFile(__dirname + '/views/robert.html'))

app.listen(3000, () => console.log("a la escuchando"))