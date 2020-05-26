console.log("working...")

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('lab-express-basic-site/public'))
app.use(express.static('lab-express-basic-site/img'))

// app.get('/home', function(req, res) {
//     res.sendFile(__dirname + '/lab-express-basic-site/views/home.html');
// })

app.get('/home', function(req, res) {
    res.sendFile(__dirname + '/lab-express-basic-site/views/home.html');
})

console.log(__dirname + '/lab-express-basic-site/views/home')


app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/lab-express-basic-site/views/about.html');
})



app.get('/works', function(req, res) {
    res.sendFile(__dirname + '/lab-express-basic-site/views/works.html');
})



app.get('/photogallery', function(req, res) {
    res.sendFile(__dirname + '/lab-express-basic-site/views/photogallery.html');
})




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))