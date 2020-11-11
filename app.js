const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));


app.get('/', (request, response) => {
    console.log('this is the home page!!');
    // response.send('<h1>Hello from Express</h1>')
    response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname +'/views/about.html');
})
app.get('/comics', (req, res) => {
    res.sendFile(__dirname +'/views/comics.html');
})


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});