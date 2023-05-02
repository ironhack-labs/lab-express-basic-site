// link express to this file 
const express = require('express');

// make an app that hols this express

const app = express();

// lets direct express to static folder which is 'public'

app.use(express.static('public')); // static images, scripts and styling are in the 'public' folder 

// Create 3 different routes - Home, About Me, My Work 

//Home - path 
app.get('/home',(request, response, next)=> {// .get protocol requests http server (gets information), next not obligatory parameter

    response.sendFile(__dirname + '/views/home-page.html');
    
    }) 

// About me - path

app.get('/aboutme', (request, response, next)=>{

    response.sendFile(__dirname + '/views/about-page.html');

})

// My work - path 
app.get('/mywork', (request, response, next)=>{
    response.sendFile(__dirname + '/views/works-page.html');

})

// image gallery - path 
app.get('/imagegallery', (request, response, next)=>{
    response.sendFile(__dirname + '/views/image-gallery.html');
})

// Start the server 

app.listen(3000, ()=>console.log("NodeJS connected!")); // in order to see connection inside the terminal 

