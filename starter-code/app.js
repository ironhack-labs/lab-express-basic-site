//Require express
const express = require('express');

//Express server handling requests and responses
const app = express();

//Make everything inside public folder visible
app.use(express.static('public'));

//Home route
app.get('/', (req,res,next)=>{
    res.sendFile(__dirname + '/views/home-page.html');
})






// Server Started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!');
  });