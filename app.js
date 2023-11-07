const express = require('express');
const app = express();
const port = 3009;

app.use(express.static('public'));

app.get('/', (request, restore) => {
    restore.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, restore) => {
    restore.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (request, restore) => {
    restore.sendFile(__dirname + '/views/works.html');
});

app.get('/photo-gallery', (request, restore) => {
    restore.sendFile(__dirname + '/views/photo-gallery.html');
});

app.listen(port, () => {
    console.log('server is running on http://localhost:3009')
})