let express=require("express")
app=express()
app.use(express.static('public'))


app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/about",(req,res)=>{
    res.sendFile(__dirname + "/views/about.html")
})

app.get("/gallery",(req,res)=>{
    res.sendFile(__dirname + "/views/gallery.html")
})


app.listen(3000,function(){
    console.log("working 3000")
})