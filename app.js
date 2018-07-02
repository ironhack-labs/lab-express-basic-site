const express = require('express');
const app = express();

// Make everything inside of public/ is available
app.use(express.static('public'));


app.get('/', (req, res, next) => {
    //request,response,next
    res.sendFile(__dirname + '/views/home.html')
});

app.get('/about-us', (req, res, next) => {
    //request,response,next
    res.sendFile(__dirname + '/views/about-us.html')
});

app.get('/photo-gallery', (req, res, next) => {
    //request,response,next
    res.sendFile(__dirname + '/views/photo-gallery.html')
});

app.listen(3000, ()=>{
    console.log('My second app listening on port 3000!')
});