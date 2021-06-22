const express = require('express')
const app = express()

// to find all the static(css) files
app.use(express.static(__dirname + '/public'))
console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/views/home.html")
});

app.get('/about', function (req, res) {
    res.sendFile(__dirname + "/views/about.html")
});

app.get('/works', function (req, res) {
    res.sendFile(__dirname + "/views/works.html")
});


app.listen(3000)