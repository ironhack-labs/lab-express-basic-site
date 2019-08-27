const express = require('express');
const app = express();
app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', (req, res, next) => {
    let data = {
        name: "human",
        bootcamp: "life"
    };

    res.render('index', data);
});

app.get('/home', (request, response, next) => {

    response.send(`<h1>Dear visitor. Please choose your seat!</h1>
    <img src="/images/balkone.jpeg">  
    
    `);
});


app.get('/about', (request, response, next) => {
    response.send(`<h1>
    This is about learning Express and Backend.
    </h1>
    <img src="/images/camping.jpeg">    
    `);
});

app.get('/shop', (req, res, next) => {
    let data = {
        name: "client",
        bootcamp: "the shop"
    };

    res.render('about', data);
});

app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + "/views/index.hbs");
});

app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
});