const express = require('express');
const app = express();

app.use(express.static("views"));
app.use(express.static("public"));
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html');
  });

  app.listen(3000, ()=>{
      console.log("mi pmhvvh")
  })