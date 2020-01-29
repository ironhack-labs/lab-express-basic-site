const express=require('express');
const app=express();
const PORT=3000;

//Home page
app.get('/',(request,response,next)=>{
    //console.log(request);
    response.sendFile(`${__dirname}/views/home-page.html`)
})
//About page
app.get('/about',(request,response,next)=>{
    response.sendFile(`${__dirname}/views/about-page.html`)
})
//Galery page
app.get('/gallery',(request,response,next)=>{
    response.sendFile(`${__dirname}/views/gallery-page.html`)
})

app.use(express.static('public'));

app.listen(PORT,()=>{
    console.log(`listening in port= ${PORT}`)
});
