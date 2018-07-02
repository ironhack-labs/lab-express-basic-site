const express = require('express');
const app = express();

//lets you leave out /public
app.use(express.static('public'));


app.get('/', (request, response, next) =>  {
    console.log(request);
    response.sendFile(__dirname + '/views/home.html');
});
app.get('/about-us', (request, response, next)=> {
    console.log(request);
    response.sendFile(__dirname + '/views/about-us.html');
});
app.get('/photo-gallery', (request, response, next)=> {
    console.log(request);
    response.sendFile(__dirname + '/views/photo-gallery.html');
});



//port 3000
app.listen(3000, ()=> {
console.log('my new site')
});