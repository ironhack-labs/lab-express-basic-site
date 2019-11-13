const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile(__dirname + "/view/index.html"));
app.get("/hot", (req, res) => res.sendFile(__dirname + "/view/hot.html"));
app.get("/really-hot", (req, res) => res.sendFile(__dirname + "/view/really-hot.html"));
app.get("/super-hot", (req, res) => res.sendFile(__dirname + "/view/super-hot.html"));
app.listen(3000, () => console.log("App escuchando"));