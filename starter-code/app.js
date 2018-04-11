const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();


// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route
app.get('/', (req,res) => {
    //res.send('<h1>Welcome Ironhacker. :)</h1>');
    res.sendFile(__dirname + '/views/index.html');

});

app.get('/about.html', (req,res) => {
    //res.send('<h1>Welcome Ironhacker. :)</h1>');
    res.sendFile(__dirname + '/views/about.html');

});

app.get('/photogallery.html', (req,res) => {
    //res.send('<h1>Welcome Ironhacker. :)</h1>');
    res.sendFile(__dirname + '/views/photogallery.html');

});




// Server Started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
});
