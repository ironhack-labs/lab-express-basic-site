const express = require('express');
const app = express();
app.get('/', (request, response, next)=>{
    console.log(request);

response.sendFile(__dirname + '/views/home-page.html');
});

// Make everythinhg inside of public available 
app.use(express.static('public'));
//this is our first route


app.get('/about', (request, response, next)=>{
    console.log(__dirname);
response.sendFile(__dirname + '/views/about.html'
);

});


app.get('/gallery', (request, response, next)=>{
    console.log(__dirname);
response.sendFile(__dirname + '/views/gallery.html'
);

});





app.listen(3000, ()=>{
// console request 
// Server Started

console.log('My first app listening on port 3000!');
});



