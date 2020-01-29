const express = require("express");

//Define la instancia de nuestro servidor
const app = express();
app.use(express.static("public"));

app.get("/",(req , res)=>{
    res.sendFile(`${__dirname}/views/home-page.html`)
});

app.get("/about-me",(req , res)=>{
    res.sendFile(`${__dirname}/views/about-me.html`)
})

app.get("/galery", (req , res) => {
    res.sendFile(`${__dirname}/views/galery.html`)
})

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`server listening on http://localhost:${PORT}`);    
})