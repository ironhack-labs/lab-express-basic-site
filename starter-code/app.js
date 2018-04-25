const express = require("express");
const app = express(); 
const controllers = require("./controllers");

app.use(express.static("public"));


app.get("/", controllers.home);
app.get("/about", controllers.about);
app.get("/gallery", controllers.gallery);

app.listen(4000, ()=>{
		console.log("Escuchando en 4000");
})


//(req, res)=>{
//	res.sendFile(__dirname + "/public/views/index.html");
//});