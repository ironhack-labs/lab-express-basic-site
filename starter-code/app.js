const express = require("express");
const hbs = require("hbs");
const app = express(); //app is an object

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials");

// app sets public folder ressources as accessible : this is mandatory if clients must access some static resources, such as images, etc
app.use(express.static(__dirname + "/public"));



//On the base route (http://localhost:3010/), listen to get request comming
// app.get("/", (request, response) => {
//   response.send("<h1>Hello world</h1>");
// });

app.get("/", (request, response) => {
  response.render(`${__dirname}/views/home.hbs`);
});

app.get("/about", (request, response) => {
  response.render(`${__dirname}/views/about.hbs`);
});

app.get("/courses", (request, response) => {
  response.render(`${__dirname}/views/courses.hbs`);
});


app.listen(3100, () => {
  console.log("my app started @ http://localhost:3100")
});


//Partial routes
// app.get('/head', (req, res, next) => {
//   res.render('head');
// });



// //HBS file
// app.get('/', (req, res, next) => {
//   // send views/index.hbs for displaying in the browser
//   res.render('home');
// });