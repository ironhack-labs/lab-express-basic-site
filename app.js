const express = require('express');
const app = express();

app.listen(4000, () => console.log("Server running"))

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/views/home.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/views/about.html')
})

app.get('/portfolio', (req, res) => {
    res.sendFile(__dirname + '/public/views/portfolio.html')
})

console.log(__dirname)