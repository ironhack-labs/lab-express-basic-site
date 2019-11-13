const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res)=> {
    res.sendFile(__dirname + "/html/index.html")
})

app.get('/about', (req, res)=> {
    res.sendFile(__dirname + "/html/about.html")
})

app.get('/gallery', (req, res) => {
    res.sendFile(__dirname + "/html/pics.html")
})

app.listen(3000);
