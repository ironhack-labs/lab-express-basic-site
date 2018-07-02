const express = require('express');
const app = express();

app.use(express.static('./public'));

//our first Route
app.get('/', (request, response, next)=> {
    
    response.sendFile(__dirname + "/views/home.html");
});

//our second Route
app.get('/about-us', (request, response, next)=> {

    response.sendFile(__dirname + "/views/about-us.html");
});

//our third Route
app.get('/gallery', (request, response, next)=> {

    response.sendFile(__dirname + "/views/gallery.html");
});



app.listen(2000, () => console.log('Example app listening on port 2000!'))