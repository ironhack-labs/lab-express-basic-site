const express = require('express');
const app = express();
const hbs = require("hbs");
const path    = require('path')

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'Public')));


app.get('/', (req, res) => {
    let data={
      title: "Gallery",
      images:["/duff.jpeg","/hey.png","/shoot.jpg"]
      
    }
    res.render('gallery',data);
  });

  app.get('/MoeCrazy', (req, res) => {
    let data={
      title: "Moe crazy",
      text: "He hates being pranked at the phone, sometimes he gest crazy",
      src: "/crazy.webp"
    }
    res.render('Moe',data);
  });

  app.get('/MoePhone', (req, res) => {
    let data={
      title: "Moe at the phone",
      text: "He gets pranked a lot",
      src:"/Moephone.gif"
    }
    res.render('moe',data);
  });

  app.get('/MoeManicure', (req, res) => {
    let data={
      title: "Moe manicure",
      text: "He is also a little bit feminine sometimes",
      src:"/Moemanicure.gif" 
    }
    res.render('moe',data);
  });

  app.get('/MoeMillionare', (req, res) => {
    let data={
      title: "Moe millionare",
      text: "He is not very smart though",
      src:"MoeMillionaire.gif" 
    }
    res.render('moe',data);
  });










app.listen(3000,() => {
console.log("Listening 3000")
});

