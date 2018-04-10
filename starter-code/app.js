const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route
app.get('/', (req,res) => {
   // console.log(req);
    //res.send('<h1>Welcome Ironhacker. :)</h1>');
    res.sendFile(__dirname + '/views/index.html');

});

app.get('/about', (req,res) => {
  //console.log(req);
  //res.send('<h1>Welcome Ironhacker. :)</h1>');
  res.sendFile(__dirname + '/views/about.html');

});

app.get('/gallery', (req,res) => {
  //console.log(req);
  //res.send('<h1>Welcome Ironhacker. :)</h1>');
  res.sendFile(__dirname + '/views/gallery.html');

});

// our first Route
/*app.get('/pepe', (req,res) => {
    console.log(req);
    let a = Math.random()*100
    
    let img;
    if(a < 50){
        img="/homer.png"
    }else{
        img="/maggie.png"
    }
    
    res.send(`
    
    <h1>Welcome Juan. :) </h1>
    <img src="${img}"/>
    
    `);
});*/


// Server Started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
});