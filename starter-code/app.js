const express = require('express')
const app = express();


app.use(express.static('public'))

app.get ('/',(req,res)=>{
    res.sendFile('index.html');
});

app.get('/about', (req, res)=> {
    res.sendFile(path.join(__dirname+'/about.html'))
})

app.get('/gallery', (req, res)=> {
    res.sendFile(path.join(__dirname+'/gallery.html'))
})


app.listen(3000, ()=> {
    console.log('escuchando en el 3000')
});