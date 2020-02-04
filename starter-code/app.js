//Inicio=========================================>

const express = require("express")
const app = express()
app.use(express.static("public"))

//Endpoints======================================>


app.get("/", (req, res) => res.sendFile(__dirname + "/views/home.html"))

app.get("/about", (req, res) => res.sendFile(__dirname + "/views/about.html"))

app.get("/gallery", (req, res) => res.sendFile(__dirname + "/views/gallery.html"))


//Rise up the server=============================>

app.listen(3000, () => console.log("I'm alive  man!"))