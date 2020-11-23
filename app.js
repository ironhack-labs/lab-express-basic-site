const express = require("express");
const app = express();

app.use(express.static('public'))

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/view/home.html')
})
app.get('/about',(req, res)=>{
    res.sendFile(__dirname + '/public/view/about.html')
})
app.get('/work',(req, res)=>{
    res.sendFile(__dirname + '/public/view/work.html')
})

app.listen(4000,()=>{
    console.log("Server running")
})


