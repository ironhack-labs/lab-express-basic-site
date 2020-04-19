require("dotenv").config();
const mongoose= require("mongoose"); 
const userModel = require("../models/user");

const users=[
    {
        firstName: "Pauline",
        LastName: "Ducos",
        email: "paulineducos27@gmail.com"
    }
]

mongoose
.connect(process.env.MONGODB_URI)
.then(self=>{
        userModel.create(users)
        .then((dbResponse)=>{console.log(dbResponse)})
        .catch((err)=>{console.log(err)})
.catch(err=>{console.log(err)})
})
