const express = require("express")
const app = express()

app.use(express.static("public"))

app.get("/",(req,res)=>{
    return res.sendFile(`${__dirname}/views/home.html`)
    });
app.get("/about",(req,res)=>{
    return res.sendFile(`${__dirname}/views/about.html`)
    });
app.get("/works",(req,res)=>{
    return res.sendFile(`${__dirname}/views/works.html`)
    });

app.listen(4000, () => console.log("lab-express-basic-site on port 4000! "));