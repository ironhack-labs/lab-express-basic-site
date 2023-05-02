//Require the Express nmp Package
const express = require('express');

// Express App
//Creating our server name app
const app = express();

//Make everything inside public available
app.use(express.static('public'));


//Creating first route
app.get('/home', (request, response, next)=>{
    response.sendFile(__dirname + '/views/home.html');
});

//Create second route
app.get('/pagetwo', (request, response, next)=>{
    response.sendFile(__dirname + '/views/pagetwo.html');
});

//Create third route
app.get('/pagethree', (request, response, next)=>{
    response.sendFile(__dirname + '/views/pagethree.html');
});

//Create fouth route
app.get('/pagefour', (request, response, next)=>{
    response.sendFile(__dirname + '/views/pagefour.html');
});

//Start the Server
app.listen(3000, () => console.log('App is listening on PORT 3000'));