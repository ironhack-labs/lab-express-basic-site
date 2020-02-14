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
        headTitle: "PORTFOLIO VARELA - HOME",
        name: "Varela",
        nav: ["about", "projects", "contact"],
        position: "Full Stack Developer",
        content: [
            {icon:"react",
            title:"React + Redux",
            desc:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum vehicula erat non congue cursus. Aenean auctor nulla quis augue dictum, sed sagittis odio varius."},
            {icon:"node-js",
            title:"Node + Webpack",
            desc:"Duis tempus leo vitae ipsum viverra, blandit condimentum sapien porttitor. Duis porttitor sed metus eget mollis. Curabitur bibendum imperdiet tortor, ut pulvinar purus elementum nspendisse at erat luctus."},
            {icon:"columns",
            title:"Agile Development",
            desc:"Cras aliquet venenatis porttitor. Donec rutrum sapien et sapien dignissim, eu dapibus mi molestie. Suspendisse dictum convallis quam et sodales. Praesent non enim et magna congue gravida."}
        ],
        copyright: "Copyright © 2019 Varela - Just another portfolio.",
        socialMedia:["linkedin", "twitter-square", "github-square"]
    };

    res.render("index", data);
});
app.get("/about", (req, res, next) => {
    let data = {
        headTitle: "PORTFOLIO VARELA - HOME",
        name: "Varela",
        nav: ["about", "projects", "contact"],
        position: "Full Stack Developer",
        content: [
            {icon:"react",
            title:"React + Redux",
            desc:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum vehicula erat non congue cursus. Aenean auctor nulla quis augue dictum, sed sagittis odio varius."},
            {icon:"node-js",
            title:"Node + Webpack",
            desc:"Duis tempus leo vitae ipsum viverra, blandit condimentum sapien porttitor. Duis porttitor sed metus eget mollis. Curabitur bibendum imperdiet tortor, ut pulvinar purus elementum nspendisse at erat luctus."},
            {icon:"columns",
            title:"Agile Development",
            desc:"Cras aliquet venenatis porttitor. Donec rutrum sapien et sapien dignissim, eu dapibus mi molestie. Suspendisse dictum convallis quam et sodales. Praesent non enim et magna congue gravida."}
        ],
        copyright: "Copyright © 2019 Varela - Just another portfolio.",
        socialMedia:["linkedin", "twitter-square", "github-square"]
    };

    res.render("index", data);
});
app.get("/projects", (req, res, next) => res.render("projects"));
app.get("/project", (req, res, next) => res.render("project"));
app.get("/contact", (req, res, next) => res.render("contact"));

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'));