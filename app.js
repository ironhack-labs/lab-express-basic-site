const express = require('express')
const app = express();

app.use(express.static('public'));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");


app.get('/', (req, res, next) => res.render("home.hbs"));
//{
//    response.sendFile(`${__dirname}/views/home.html`); 
//});

  app.get('/projects', (req, res, next) => {
    res.render("projects.hbs", {
        projects: [
            {image: "images/decathlon.png", alt: "project one"},
            {image: "images/decathlon.png", alt: "project two"},
            {image: "images/decathlon.png", alt: "project three"},
            {image: "images/decathlon.png", alt: "project four"},
            {image: "images/decathlon.png", alt: "project five"},
            {image: "images/decathlon.png", alt: "project six"},


        ]
    })
  });
  
 
  app.get('/contact', (req, res, next) => res.render("contact.hbs"));


  app.listen(3000, () => console.log('My first app listening on port 3000! '));
