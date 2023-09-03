const express = require('express');
const app = express();

app.use(express.static("public"));

app.get('/home', (req, res) => res.sendFile(__dirname + '/public/views/home.html'));
app.get('/about', (req, res) => res.sendFile(__dirname + '/public/views/about.html'));
app.get('/works', (req, res) => res.sendFile(__dirname + '/public/views/works.html'));

app.listen(3000, () => console.log('PORT 3000 IS WORKING!!! WOHOOO!'));





