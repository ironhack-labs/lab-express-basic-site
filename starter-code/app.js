const express = require('express')
const app = express()

app.use(express.static('public'))

// app.get('/ExpressBasic', (req, res) => res.send('<h1>LAB EXPRESS BASIC SITE</h1>'))

//historia
app.get('/', (req, res) => res.sendFile(__dirname + '/views/process1.html'))
app.get('/process2', (req, res) => res.sendFile(__dirname + '/views/process2.html'))
app.get('/process3', (req, res) => res.sendFile(__dirname + '/views/process3.html'))
app.get('/process4', (req, res) => res.sendFile(__dirname + '/views/process4.html'))
app.get('/process5', (req, res) => res.sendFile(__dirname + '/views/process5.html'))
app.get('/process6', (req, res) => res.sendFile(__dirname + '/views/process6.html'))



app.listen(3000, () => console.log('App escuchando'))