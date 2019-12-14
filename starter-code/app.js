const express = require('express');

const app = express();
app.use(express.static('public'));

app.get('/',(req,res) =>{
    res.sendFile(__dirname + "/views/index.html");
})
app.get('/about' , (req,res)=>{
    res.sendFile(__dirname + "views/about");
})

//Start server
app.listen(3000 , ()=>{
    console.log(`Running coldplay tribute fan page`);
})