'use strict'



const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/home',(request, response, next ) => {

    response.send(`<h1>Slither.io Addicts Anonymous</h1>
    <p>A place of understanding for those suffering from this terrible addiction</p>
    <img src="images/home-img.jpg">`);

});


app.get('/about',(request, response, next ) => {

    response.send(`<img src = "images/slither2.png`);
});


app.get('/gallery',(request, response, next ) => {

    response.send(`<img src = "images/slither1.png`);
    });
    
app.get('/',(request, response, next ) => {

        response.send(`<h1>Slither.io Addicts Anonymous</h1>
        <p>A place of understanding for those suffering from this terrible addiction</p>
        <img src="images/home-img.jpg">`);
    
    });
    

app.listen(3000, () =>{
});