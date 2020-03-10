const express = require ("express");
const app = express();
app.use(express.static('public'))

app.get('/',(request,response,next)=>{
    // response.send("<h1>ajklsd</h1>")
    response.sendFile(__dirname+"/views/home.html")
})
app.get('/about',(request,response,next)=>{
    // response.send("<h1>ajklsd</h1>")
    response.sendFile(__dirname+"/views/about.html")
})
app.get('/works',(request,response,next)=>{
    // response.send("<h1>ajklsd</h1>")
    response.sendFile(__dirname+"/views/works.html")
})
app.get('/gallery',(request,response,next)=>{
    // response.send("<h1>ajklsd</h1>")
    response.sendFile(__dirname+"/views/gallery.html")
})
app.listen(3000,()=>{
    console.log("App running on port 3000")
})