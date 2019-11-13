const express = require('express')
const app = express()

app.use(express.static('public'))



app.get('/HAHAHAHAAHAHAHAHA', (req, res) => res.send('<h1>if you are good at something never do it for free</h1>'))




//MIS LINKSSSS!!!
app.get('/', (req, res) => res.sendFile(__dirname + '/views/index-page.html'))
app.get('/joker-Dc', (req, res) => res.sendFile(__dirname + '/views/joker-Dc.html'))
app.get('/Batman', (req, res) => res.sendFile(__dirname + '/views/Batman.html'))
app.get('/Penguin', (req, res) => res.sendFile(__dirname + '/views/Penguin.html'))
app.get('/scarecrow', (req, res) => res.sendFile(__dirname + '/views/scarecrow.html'))








//escuchame , comprendelo
app.listen(3000, () => console.log('App escuchando'))