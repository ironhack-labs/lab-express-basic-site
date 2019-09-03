const express = require('express')

const app = express();

app.use(express.static('public'));

// app.use((request, response, next) =>{
//     console.log('Hit my costum middleware.');
//     next();
// });

app.get('/home',(request, response, next) => {
    //Often times you will see "request" being called "req"
    //"response" being called "res"
    console.log('Got request in express app');
    //response.send('Helllo world from express app!')  
    response.sendFile(__dirname + '/views/index.html')
});


app.get('/about',(request, response, next) => {

    response.sendFile(__dirname + '/views/about.html')

});

app.get('/gallery',(request, response, next) => {

    response.sendFile(__dirname + '/views/gallery.html')

});


app.get("*", (request, response, next)=> {
    console.log('User hit de wrong page', request.url)
    response.status(404);
    response.send('Got lost');
});


app.listen(3000);