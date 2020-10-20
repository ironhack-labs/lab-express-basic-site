const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/',(request, response, next)=>{
    response.sendFile(__dirname+'/view/home.html');
});
app.get('/about',(request, response, next)=>{
    response.sendFile(__dirname+'/view/about.html');
});
app.get('/works',(request, response, next)=>{
    response.sendFile(__dirname+'/view/works.html');
});
app.get('/photo-gallery',(request, response, next)=>{
    response.sendFile(__dirname+'/view/photo-gallery.html');
});


app.listen(3000, () => {

    console.log('My first app listening on port 3000!');
  
  });
  