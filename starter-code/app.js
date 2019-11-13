const express = require('express');
const app = express();

app.use(express.static('public'))


app.get('/', (req, res) => res.sendFile(__dirname + '/views/home-page.html'))
app.get('/motherland', (req, res) => res.sendFile(__dirname + '/views/motherland-page.html'))
app.get('/people', (req, res) => res.sendFile(__dirname + '/views/people-page.html'))

app.listen(3000, () => {
    console.log('Russia')
});