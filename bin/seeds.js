require("dotenv").config();
require("../config/dbConfig");
const mongoose = require("mongoose");
const Newsletter = require("../models/newsletter");

const newsletter = [{
        email: "florian.jomain@gmail.com",
    },
    {
        email: "sebastien.m.barat@gmail.com",
    },
    {
        email: "mail@martinezbaratlafore.com",
    },
    {
        email: "florian.jomain@yahoo.fr",
    },
];

mongoose
    .connect(process.env.MONGODB_URI)
    .then((self) => {
        console.log(`Connected to ${self.connection.name}`);
        Newsletter.create(newsletter)
            .then((newsletter) => {
                newsletter.forEach((user) => {
                    console.log(user.email);
                });
            })
            .catch((err) => {
                console.log(err);
            });
    })
    .catch((err) => {
        console.log(`Error occured while connecting to the Database ${err}`);
    });