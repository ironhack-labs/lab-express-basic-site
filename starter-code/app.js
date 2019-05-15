const express = require('express')

const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(__dirname + view / home - page.html))