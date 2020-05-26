const express = require("express");


const app = express();

//MIDDLEWARE
app.use(express.static('public'));
app.set('views', __dirname + '/views');

app.get('/', (req, res) =>
    res.sendFile(__dirname + '/views/home.html'));

app.get('/about', (req, res) =>
    res.sendFile(__dirname + '/views/about.html'));

app.get('/works', (req, res) =>
    res.sendFile(__dirname + '/views/works.html'));



app.listen(3000, () => {
    console.log('My first app listening on port 3000!');
      
});
      