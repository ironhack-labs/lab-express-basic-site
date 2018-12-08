const express=require('express');
const app=express();

app.use(express.static('public'));

//home page route
app.get('/',(request,response,next) =>{
  console.log(request);
  response.sendFile(__dirname+'/views/index.html');
});

//about page route
app.get('/about',(request,response,next) =>{
  console.log(request);
  response.sendFile(__dirname+'/views/about.html');
});

//photo page route
app.get('/photos',(request,response,next) =>{
  console.log(request);
  response.sendFile(__dirname+'/views/photos.html');
});

app.listen(3000,()=>{
  console.log("Server started!");
})
