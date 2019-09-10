
const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.static("public"));

app.get('/',(req, resp) => {
  resp.sendFile(__dirname + "/views/home.html");
})
app.get('/about',(req,resp) => {
  
  resp.sendFile(__dirname + "/views/about.html")
  
  app.get('/gallery',(req, resp) => {
    resp.sendFile(__dirname + "/views/gallery.html");
  })
})

app.listen(PORT);