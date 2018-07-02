const express = require('express');
const app = express();

app.use(express.static('public'));

// our first Route
app.get('/', (request,response, next)=> {
    // console.log(request);
    response.sendFile(__dirname + '/views/home.html')
});

app.get('/about-us', (request,response, next)=> {
    // console.log(request);
    response.sendFile(__dirname + '/views/about-us.html');
});
app.get('/gallery', (request,response, next)=> {
    // console.log(request);
    response.sendFile(__dirname + '/views/gallery.html');
});

app.listen(3000, ()=> {
    // response.sendFile(__dirname + '/views/about-us.html');
    console.log ('My first app listening on port 3000!')
});