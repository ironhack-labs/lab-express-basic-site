
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home-page.html');
});

app.get('/Earth', (req, res) => {
    res.sendFile(__dirname + '/views/image-page.html');
});

app.listen(3000, () => {
    console.log('Server: listening - port 3000')  
  });