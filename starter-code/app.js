const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/homepage.html');
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
})

app.get('/image-gallery', (req, res) => {
    res.sendFile(__dirname + '/views/image-gallery.html');
})

app.listen(3000, () => {

});
