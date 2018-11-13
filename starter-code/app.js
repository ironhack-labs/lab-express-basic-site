const express = require('express');
// ^ this line means: go look in node_module folder and find another folder called express
// in that folder, there will a file that is doing a bunch of magic and then
// exporting a magic variable for you and you are equaling express to that variable
const app = express();
// this line creates a variable called app that is equal to whatever happens
//when we run the file that we got from requiring express on line 1



app.use(express.static('public'));




app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/views/home.html");
});


app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/views/about.html');
})

app.get("/Info", (req, res, next) => {
  res.sendFile(__dirname + "/views/moreInfo.html");
});



app.listen(3000, () => {
  console.log('hello world!')
});