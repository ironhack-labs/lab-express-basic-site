const express= require("express");
const app= express();

app.use(express.static("public"));

app.get("/",(request, response)=>{
    response.sendFile(__dirname +"/view/index.html")
})
app.get("/about",(request, response)=>{
    response.sendFile(__dirname +"/view/about.html")
})
app.get("/photo",(request, response)=>{
    response.sendFile(__dirname +"/view/photo.html")
})


app.listen(3000)