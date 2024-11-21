const express = require ("express")
const app = express();

app.use(express.static('public'));

app.get("/",function(req,res,next){
    res.sendFile(__dirname + "/views/index.html")
    console.log("who let the dogs out");
});
app.get("/tricks-page",function(req,res,next){
    res.sendFile(__dirname + "/views/tricks-page.html")
    console.log("tricks? where?");
});

app.get("/about-page",function(req,res,next){
res.sendFile(__dirname + "/views/about-page.html")
console.log("hello this is Kiwi");
});




app.listen(3000, () => { console.log("server listening on port 3000...")});