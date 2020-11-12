const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

// index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});
// about.html
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
});
// works.html
app.get('/works', (req, res) => {
    res.sendFile(__dirname + '/views/works.html')
});
// gallery.html
app.get('/gallery', (req, res) => {
    res.sendFile(__dirname + '/views/gallery.html')
});


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});