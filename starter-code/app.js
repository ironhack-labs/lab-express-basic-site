const express=require('express');

const app=express();

// serve static stuff from public
app.use(express.static('public'));

// register get routes
app.get('/',(req,res)=>{
    res.sendFile('views/index.html',{root:'./'});
});

app.get('/about',(req,res)=>{
    res.sendFile('views/about.html',{root:'./'});
});

app.get('/photogallery',(req,res)=>{
    res.sendFile('views/photogallery.html',{root:'./'});
});

// run my express server
app.listen(3000);