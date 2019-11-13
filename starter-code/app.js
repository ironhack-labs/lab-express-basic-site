const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))
app.get('/chiste1', (req, res) => res.sendFile(__dirname + '/views/chiste-1.html'))
app.get('/chiste2', (req, res) => res.sendFile(__dirname + '/views/chiste-2.html'))
app.get('/chiste3', (req, res) => res.sendFile(__dirname + '/views/chiste-3.html'))


app.listen(3000, () => console.log('App escuchando'))