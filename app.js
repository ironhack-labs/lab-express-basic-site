
const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'))

const port = 3000;

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.get('/works', (req, res) => {
    res.sendFile(__dirname + '/views/works.html')
})




app.listen(port, () => {

    console.log('Server is listeing at port 3000')
})