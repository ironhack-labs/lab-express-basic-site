const myExpress = require ("express");
const PORT = 3000;
const app = myExpress();
// Route to use Express package

app.use(myExpress.static('public'));

// hbs Routes  
app.get("/", (req, res, next) => {
  res.render('home.hbs');
});

app.get("/about", (req, res, next) => {
  res.render('about.hbs');
});

app.get("/PhotoGallery", (req, res, next) => {
  res.render('photoGallery.hbs');
});

// Port to connect to Localhost
app.listen(PORT, ()=> console.log("Port 3000"))