console.log('Node!')

const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.static('views'))
app.use(express.static('img'))
app.set('view engine', 'hbs')


//HOME
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/home.html')

})
//ABOUT
app.get('/about', function (req, res) {

    res.sendFile(__dirname + '/views/about.html')
})
//WORKS
app.get('/works', function (req, res) {

    res.sendFile(__dirname + '/views/works.html')
})
//GALLERY
app.get('/photo-gallery', function (req, res) {

    res.sendFile(__dirname + '/views/photo-gallery.html')
})

/*
//hbs
app.get('/all-students', function (req, res) {
    
    res.render(__dirname + '/views/hbs/students.hbs', {students})
})
*/

app.listen(3000)