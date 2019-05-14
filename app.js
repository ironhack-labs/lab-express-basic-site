
const express = require("express");
//start operation of express and port

const app = express();
const port = 3000;

//static resources sentence
app.use(express.static("public"));

//get() methods
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/homepage.html');
})

app.get("/about" , (req, res) =>{
  res.sendFile(__dirname + "/views/about.html")
})
app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/views/photo-gallery.html");
});
//listen method to node

app.listen(port, () => {
  console.log(`App escuchando en el puerto ${port}`);
});