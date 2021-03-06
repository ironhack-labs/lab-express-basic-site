const express = require('express');
const app = express();


app.use(express.static('public'));

app.get('/', (req, res) => {

    console.log(req.url)
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/about', (req, res) => {

    console.log(req.url)
    res.sendFile(__dirname + '/views/about.html');
});

app.listen(3000, () => console.log('server lingado'));