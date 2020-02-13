// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get("/", (req, res, next) => {
    let data = {
        name: "Ironhacker",
        bootcamp: "Ironhack Web Dev"
    };

    res.render("index", data);
});

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'));