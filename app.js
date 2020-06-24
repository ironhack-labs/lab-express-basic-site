const express=require('express'); 
const app=express(); 

app.use(express.static('public')); 

app.get('/', (req,res) => {
    res.sendFile(__dirname+'/views/index.html'); 
}); 
app.get('/earlylife', (req,res) => {
    res.sendFile(__dirname+'/views/earlyLife.html'); 
}); 
app.get('/mozillaproject', (req,res) => {
    res.sendFile(__dirname+'/views/mozillaproject.html'); 
}); 
app.get('/gallery', (req,res) => {
    res.sendFile(__dirname+'/views/gallery.html'); 
}); 


app.listen(3000, () => {
    console.log('listening on port 3000'); 
});  
