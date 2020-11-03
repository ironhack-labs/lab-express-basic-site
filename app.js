const express = require('express');
const app = express();
const port = 5500;

app.use(express.static("/public"));
app.use(express.static("/views"));
// app.use("/views/")



app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/About.html");
});
app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/views/Works.html");
});

// module.exports = app;

app.listen(port, () => console.log(`My first app listening on ${port}`));

