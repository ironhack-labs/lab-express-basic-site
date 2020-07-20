require('dotenv').config()
const express = require('express')
 
const app = express();

app.use(express.static('public'));


app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/intro.html'));
 
app.get('/home', (request, response, next) => {
    response.send('<h1>Welcome Visitor.</h1>');
});

app.get('/about', (request, response, next) => {
    response.send('<h1>This is some info about the person I am making this page for!</h1>');
});

app.get('/works', (request, response, next) => {
    response.send('<h1>Here I will showcase some of the work this person has done!</h1>');
});

app.listen(process.env.PORT, () => console.log(`My first app listening on port ${process.env.PORT} `));