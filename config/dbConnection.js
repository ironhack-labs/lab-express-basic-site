const mongoose = require("mongoose"); 

mongoose
.connect(process.env.MONGODB_URI, {useNewUrlParser:true})
.then(x=>{console.log("Connected to the Mongo DB")})
.catch(err=>{console.log("Error connecting to mongoDB",err)}); 

