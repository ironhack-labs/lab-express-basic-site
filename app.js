const express = require('express');
const server = express();
const mongoose = require('mongoose');


// With these 2 lines, no need to link the path of the files in the "public" folder
// Just start from inside the "public" folder
const path = require("path");
server.use(express.static(path.join(__dirname, "public")));

// Setting up the server
// server.listen(3001, function () {
//     console.log("Server is working");
// });

// Setting up the different URL inside the routes > baseRoutes.js
server.use('/', baseRoutes)


// Creating PORTS + environment variables inside the ".env" file
require("dotenv").config();
server.listen(process.env.PORT, () => {
    console.log("ok");
})


////////////////////// DATABASE //////////////////////
// CONNECTING TO OUR MONGODB DATABASE
// const mongoose = require('mongoose'); déjà plus haut

// This is the minimum needed to connect the seb_first_db database running locally on the default
// port (27017). If connecting fails on your machine, try using 127.0.0.1 instead of localhost.
mongoose.connect('mongodb://localhost:27017/seb_first_db', {useNewUrlParser: true});

// First: defining the pattern for our datas:

const userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number,
    email:String,
    password:String,
});

// Second: linking our datas => collection name + schema name

const userModel = mongoose.model("User", userSchema);

// Third: passing info inside our datas in order to create them

