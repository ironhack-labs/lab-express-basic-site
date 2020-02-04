const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.static("public"));

app.get('/home', (request, response) => {
    response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', (request, response) => {
    response.sendFile(__dirname + '/views/gallery.html');
});

app.listen(PORT, () => {
    
    console.log(`listening on port ${PORT}`);
});