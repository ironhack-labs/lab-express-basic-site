const express= require("express");
const app = express()
const hbs = require("hbs")

app.use(express.static(__dirname + "/public"));
// the static folder will contain static files: like css, images, sounds, videos, front-end js (DOM) : WE MUST tell express explicitely where it is, and that we wanna allow the browsers to dowlonad files without extra permissions
app.set("view engine", hbs);
// above : use hbs to render html (super html features)
app.set("views", __dirname + "/views");
// hey express : our views are located in that folder

app.get("/"),(req,res)=>{
    res.render("/home.hbs", )
}

app.get("about"),(req,res)=>{
    res.render("/about.hbs", )
}

app.get("/works"),(req,res)=>{
    res.render("/works.hbs", [{
        
        firstName:"Earving",
        lastname:"Ngapeth",
        dateOfBirth:"02/12/1991",
        nationality:"French",
        heigh:"1m94",
        weight:"93kg",
        blockHeigh:"3m27",
        spikeHeight:"3m58",
        position: "wing spiker",
        nationalSelection:"249",
        IntCareer:[{
            year: 2018,
            competition: "Nations League",
            ranking:"2nd",
            persReward: ""},
{
            year: 2017,
            competition: "World League",
            ranking:"Champion",
            persReward: "MVP"},
{
            year: 2016,
            competition: "World League",
            ranking:"3rd",
            persReward: "2nd best wing spiker"},
{
            year: 2015,
            competition: "Europa Cup",
            ranking:"Champion",
            persReward:"" },        
{
            year: 2015,
            competition: "World League",
            ranking:"Champion",
            persReward: "MVP"},
{
            year: 2014,
            competition: "World league",
            ranking:"4th",
            persReward: ""},        
{
            year: 2009,
            competition: "Europa cup (U19)",
            ranking:"Champion",
            persReward: "MVP"},
{
            year: 2008,
            competition: "Europa cup (U21)",
            ranking:"Champion",
            persReward: "MVP"},
{
            year: 2007,
            competition:"Europa cup (U19)",
            ranking:"Champion",
            persReward:"" },
{
            year: 2007,
            competition: "Wolrd Cup (U19)",
            ranking:"3rd",
            persReward:"",}

        ]
    }])
}

app.listen(3080); // ACCESS CHANGES ON localhost:3080 this open a PORT on our server, allowing incomming HTTP request

