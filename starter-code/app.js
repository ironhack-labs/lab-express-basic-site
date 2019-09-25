const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.htm"));
app.get("/about", (req, res) => res.sendFile(__dirname + "/views/about.htm"));
app.get("/gallery", (req, res) => res.sendFile(__dirname + "/views/gallery.htm"));

app.listen(8888, () => {
  console.log(`Server started on port 8888!`);
});
