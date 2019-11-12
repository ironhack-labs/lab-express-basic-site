const express = require("express")
const app = express();
const PORT = 3000;


app.use(express.static('public'));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
})

app.get("/gallery", (req, res) => {
    res.sendFile(__dirname + "/views/gallery.html");
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html");
})

// Server Started
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}!`)
  });
  