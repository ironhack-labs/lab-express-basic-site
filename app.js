const express= require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (require, response) => {
    response.sendFile(__dirname + '/views/home.html')
});

app.get('/about', (require, response) => {
    response.sendFile(__dirname + '/views/about.html');
})

app.get('/gallery', (require, response) => {
    response.sendFile(__dirname + '/views/gallery.html');
})

app.listen(3000, () => {
    console.log('connected on port 3000')
});

