let express = require('express');
let app = express();

app.use( express.static(__dirname + '/public'));
 
app.get('/' , ( req, res ) => {
    res.sendFile(__dirname + '/views/home.html')
});

app.get('/about' , ( req, res ) => {
    res.sendFile(__dirname + '/views/about.html')
});

app.get('/works', (req, res) => {
    res.sendFile(__dirname + '/views/works.html')
});

app.get('/photos', (req, res) => {
    res.sendFile(__dirname + '/views/photos.html')
});



app.listen(3000)