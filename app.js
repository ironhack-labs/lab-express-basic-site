const express = require("express");
const hbs = require("hbs");
const fs = require("fs");
const { rejects } = require("assert");
const { resolve } = require("path");

const app = express();

// give access to public assets
app.use(express.static(__dirname + "/public"));

// needs to be put before the template configuration
hbs.registerPartials(__dirname + "/views/partials"); // where the partials are located

// template configuration
app.set("views", __dirname + "/views"); // where the views are located
app.set("view engine", "hbs"); // which templating engine to be used

let galleryPics = [];

function picArray(path) {
    return new Promise((res, rej) => {
        fs.readdir(path, (err, files) => {
            err ? rej(err) : res(files);
            files.shift();
        })
    })
}

async function returnArray(path) {
    let result = await picArray(path);
    galleryPics = result;
}

returnArray("public/display/");

hbs.registerHelper("displayGallery", (array) => {
    var images = "";
    for (let i = 0; i < array.length; i++) {
        images += `<img src="display/${array[i]}" alt="">`;
    }
    return images;
});

// routing
app.get("/", (req, res) => {
    res.render("home", {
        pageTitle: "Homepage",
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        pageTitle: "About",
    });
});

app.get("/work", (req, res) => {
    res.render("work", {
        pageTitle: "Work",
    });
});

app.get("/gallery", (req, res) => {
    res.render("gallery", {
        pageTitle: "Gallery",
        galleryPics,
    });
});

app.get("*", function (request, response) {
    response.send("not found sorry");
});

app.listen(3030, () => {
    console.log("server is running @http://localhost:3030");
});