const express = require("express");
const app = express();

// get public folder
app.use(express.static('public'));

// root
app.get("/", (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/index.html');
});

// server
app.listen(3000, ()=>{
  console.log("app is running")
})