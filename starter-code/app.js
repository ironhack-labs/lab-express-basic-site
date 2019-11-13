const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/welcome', (req, res) => res.send('<h1>hey hey hey</h1>'))


app.get('/', (req, res) => res.sendFile(__dirname + '/views/welcome.html'))
app.get('/hackerman', (req, res) => res.sendFile(__dirname + '/views/hackerman.html'))
app.get('/me', (req, res) => res.sendFile(__dirname + '/views/me.html'))


app.listen(3000, () => console.log('Go on'))