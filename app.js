const express = require('express');




const app = express();

app.use(express.static('public'));


app.get('/', (req, res) => {
    
    res.sendFile(__dirname + '/views/home-page.html')


});


app.get('/about', (req, res)=>{
    res.sendFile(__dirname + '/views/about-page.html');
  });

app.get('/photo', (req, res)=>{
    res.sendFile(__dirname + '/views/photo-page.html');
  });




app.listen(3000, ()=>{
    console.log("my first app listening on port 3000")
});
