//STEP 1 => import the framework 

const express = require("express");
const hbs = require("hbs");

const app = express();
//STEP 2 => basic APP Setup 
app.use(express.static(__dirname + "/public"));
app.set("views",__dirname + "/views");
app.set("view engine","hbs");


app.get(["/","/home"],(request,response)=>{
    response.render("home");
});


app.get("/about",(request,response)=>{
    response.render("about");
});

app.get("/content",(request,response)=>{
    response.render("content");
});

app.get("*", (req,res)=>{
 res.send("sorry not found");
});

app.listen(3000,()=>{
    console.log("server is ready to rock @http://localhost:3000");
});