const express = require("express");
const app = express();
const port = 3000;

app.use((req,res, next)=>{
    console.log('in the middleware')
    next()
})

app.use(express.static('public'))

app.get("/about", (req,res)=>{
    console.log(__dirname)
    res.sendFile(__dirname + '/views/about.html')
})

app.get("/about", (req,res)=>{
    console.log(__dirname)
    res.sendFile(__dirname + './views.about.html')
})
app.get("/about", (req,res)=>{
    console.log(__dirname)
    res.sendFile(__dirname + './views.index.html')
})
app.get("/about", (req,res)=>{
    console.log(__dirname)
    res.sendFile(__dirname + './views.works.html')
})


app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);


