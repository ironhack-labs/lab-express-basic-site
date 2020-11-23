const express = require("express");
const app = express();

app.use(express.static('public'))

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/view/home.html')
})
app.get('/about',(req, res,next)=>{
    res.sendFile(__dirname + '/view/about.html')
})
app.get('/work',(req, res, next)=>{
    res.sendFile(__dirname + '/view/work.html')
})

app.listen(4000,()=>{
    console.log("Server running")
})


