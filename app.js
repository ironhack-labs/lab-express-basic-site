const express = require('express')
const app = express()

app.use(express.static('public'))

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/about', (req, res) => {
    // console.log(__dirname);
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (req, res) => {
    // console.log(__dirname);
    res.sendFile(__dirname + '/views/works.html');
});

