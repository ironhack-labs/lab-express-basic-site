const express = require('express'); 
const app = express(); 
app.use(express.static('public')); 
// home rute
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home.html')) 

// about rute
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html')) 
// work rute
app.get('/work', (request, response, next) => response.sendFile(__dirname + '/views/work.html')) 
// photo rute
app.get('/photo', (request, response, next) => response.sendFile(__dirname + '/views/photo.html')) 
  

app.listen(3000, () => console.log('My first app listening on port 3000! ')); 

 