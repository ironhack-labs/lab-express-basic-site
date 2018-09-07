const express = require('express')
const app = express()
const hbs = require('hbs')

app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')
app.use(express.static('public'));

app.get("/", (req, res)=>{
  res.render("home")
})

app.get("/gallery", (req, res)=>{
  res.render("gallery")
})

app.get("/about", (req, res)=>{
  res.render("about")
})


app.listen("3000", function(req, res){
  // res.send("whats up")
  console.log("server has started")
})
