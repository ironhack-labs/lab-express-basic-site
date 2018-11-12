var express = require('express');
var app = express();
var path = require('path');
var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
// app.use(express.static('views')); also can be used to access all html files
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + '/views/index.html')); // to check the path for the file
  });

  app.get("/home", function(req, res){
    res.sendFile(path.join(__dirname + '/views/index.html')); // to check the path for the file
  });

app.use(express.static('public'));

app.get("/handlebars", function(req, res){
  res.render('partials/handlebars', {name: 'dea'})
});

app.get("/about", function(req, res){
  res.render("about");
});

app.get("/gallery", function(req, res){
  res.render("gallery");
});

app.get("/reusedcomponents", function(req, res){
  res.render("partials/reusedcomponents");
});

app.get("/contact", function(req, res){
  res.render("contact", {name: 'man!'});
});

app.listen(4000, function(){
  console.log("listening");
});





 // app.get("/about", function(req, res){
  //   res.sendFile(path.join(__dirname + '/views/about.html')); // to check the path for the file
  // }); //changed to hbs, so this one is no longer used
  // app.get("/gallery", function(req, res){
  //   res.sendFile(path.join(__dirname + '/views/gallery.html')); // to check the path for the file
  // });