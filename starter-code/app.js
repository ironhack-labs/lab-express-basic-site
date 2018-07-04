const express=require("express")
const app=express();

app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/imagenes"));


app.get("/",(req,res)=>{
    res.sendfile(__dirname+"/index.html");
   // res.use("/static",express.static(__dirname+"/imagenes"));
});

app.listen(3000,()=>{
    console.log("escuchando en el 3000")
})