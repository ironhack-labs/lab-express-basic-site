const express = require("express")
const app = express();
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/about',(req,res,next)=> {
  res.render('about');
});

app.get('/',(req,res,next)=> {
  res.render('home');
});

app.get('/gallery',(req,res,next)=> {
  res.render("gallery");
});








app.listen(3000, () => {
console.log("app listening in port 3000")

});