require("dotenv").config();
require("./config/dbConnection")
const express = require("express");
const hbs = require('hbs');
const server = express();
const path = require("path");

server.set("view engine","hbs");
hbs.registerPartials(path.join(__dirname, "views", "partials"))
server.use(express.static(path.join(__dirname, "public"))); 

//routes
const baseRouter =require("./routes/baseRoutes"); 
server.use("/", baseRouter); 


//port
const PORT= process.env.PORT;
server.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
});