const express = require('express');
require("jsdom").env("", function(err, window) {
  if (err) {
      console.error(err);
      return;
  }

  var $ = require("jquery")(window);
});

const app = express();

app.use(express.static('public'));

app.get('/', (req, res, next) =>{
  //console.log("/assests/stylesheets/styles.css")
  res.sendFile(__dirname + "/views/home.html")
})

app.get('/about', (req, res, next) =>{
  res.sendFile(__dirname + "/views/about.html")
})

app.get('/high', (req, res, next) =>{
  res.sendFile(__dirname + "/views/high.html")
})


app.listen(3000, () => {
  console.log("Listening port 3000")
});