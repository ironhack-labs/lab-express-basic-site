const express = require("express");
const app = express();

app.use(express.static(__dirname + "/views"));

app.get("/",(req,res)=>{
	res.sendFile(__dirname + "/views/home.html");
});

app.get("/about",(req,res)=>{
	res.sendFile(__dirname + "/views/about.html");
});

app.get("/photo",(req,res)=>{
	res.sendFile(__dirname + "/views/photo.html");
});

app.listen(3000, ()=> {
	console.log("Escuchando en el servidor 3000")
});