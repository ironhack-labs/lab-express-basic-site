const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/homepage.html')
})

app.get('/career', function (req, res) {
    res.sendFile(__dirname + '/views/career.html')
})

app.get('/works', function (req, res) {
    res.sendFile(__dirname + '/views/works.html')
})

app.get('/castings', function (req, res) {
    res.sendFile(__dirname + '/views/castings.html')
})



app.listen(port, function () {
    console.log(`Server listening on the port ${port}`)
})
