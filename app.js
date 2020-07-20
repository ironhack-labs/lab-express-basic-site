require('dotenv').config()
const express = require('express')
 
const app = express();

app.use(express.static('public'));


app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/intro.html'));
 
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/intro.html'));


app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));


app.listen(process.env.PORT, () => console.log(`My first app listening on port ${process.env.PORT} `));