require("dotenv").config();
require("./config/mongo");
const express = require("express");
const hbs = require("hbs");
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const flash = require("connect-flash");
const session = require("express-session");
const path = require("path");
const protectRoute = require("./middlewares/protectRoute");
const MongoStore = require('connect-mongo');


// mongoose
//   .connect('mongodb://localhost/Friend', {useNewUrlParser: true})
//   .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err)
//   });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views/partials"));



app.get("/", (req, res) => {
    res.render("home");
  });
  
  app.get("/about", (req, res) => {
    res.render("about");
  });
  
 
 
  
  
  app.get("/profile", (req, res) => {
    res.render("profile");
  });
  app.listen(8888, () => {
    console.log("ready @ http://localhost:8888");
  });


app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
    store: MongoStore.create( { mongoUrl:MONGO_URI } )
  })
 
);

app.use(flash());

app.use(require("./middlewares/exposeFlashMessage"));

// expose login status to the hbs templates
app.use(require("./middlewares/exposeLoginStatus"));


const familyRoutes = require('./routes/families');
app.use('/', familyRoutes);

const storyRoutes = require('./routes/stories');
app.use('/',storyRoutes);

const authRouter = require("./routes/auth")
app.use("/auth", authRouter);

