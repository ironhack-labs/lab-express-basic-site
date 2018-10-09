const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));

app.get('/about',(req,res) => res.sendFile(__dirname + '/views/about.html'));

app.get('/poemas', (req,res) => res.sendFile(__dirname + '/views/poemas.html'));

app.listen(port, () => console.log(`Example app listening on ${port}`));