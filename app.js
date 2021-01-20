const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/views/home-page.html')
})

app.get('/about', (req, res, next) => {
    res.sendFile(__dirname + '/views/about-page.html');
});

app.get('/galery', (req, res, next) =>{
    res.sendFile(__dirname + '/views/galery-page.html');
})

app.get('/history', (req, res, next) => {
    res.sendFile(__dirname + '/views/history-page.html');
})
app.listen(3000, () => console.log('Listening on port 3000'))

