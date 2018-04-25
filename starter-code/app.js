const express = require("express");
const app = express();
const controlers = require("./controlers")

app.use(express.static("public"))


app.get("/",(req,res)=>{
        res.sendFile(__dirname + "./public/index.html")
})
app.get("/home",controlers.home);
app.get("/about",controlers.about);
app.get("/photos",controlers.photos);

app.listen(3000,() => {
    console.log("Esxuchando en 3000")
});