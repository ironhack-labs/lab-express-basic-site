const express = require("express")
const app = express();

app.use(express.static('public'));


//app.get('/home') is equivalent to '/'
app.get('/', (req, res, next) => res.sendFile(__dirname + '/views/home.html'))

app.get('/about', (req, res, next) => res.sendFile(__dirname + '/views/about.html'))

//this page isn't working for some reason - Cannot GET /views/works.html
app.get('/views/works.html', (req, res, next) => res.sendFile(__dirname + '/views/works.html'))

app.listen(3000)