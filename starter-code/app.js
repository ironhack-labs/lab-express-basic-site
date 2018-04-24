const express = require('express'); // access to all express functions
const app = express(); // using app, easier reference for page, cleaner way to read

app.use(express.static('public'));





// ======= Routes ===================
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/about-us', (request, response, next) => {
  response.sendFile(__dirname + '/views/about-us.html'); 
});

app.get('/photo-gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/photo-gallery.html');
});
 // =======================================   
  
  
  
  
  
  
  
  app.listen(3000, () => {
      console.log('My first app listening on port 3000!');
    });