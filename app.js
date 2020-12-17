const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/views/home.html')
});

app.get('/LIFE', (req, res, next) => {
    res.sendFile(__dirname + '/views/about.html')
});

app.get('/GOALS', (req, res, next) => {
    res.sendFile(__dirname +'/views/works.html')
})

app.get('/PICTURES', (req, res, next) => {
    res.sendFile(__dirname +'/views/images.html')
})



const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    console.log(`Ready to listen on port ${port}`);
})