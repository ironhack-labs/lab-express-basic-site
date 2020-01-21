const express = require("express");
const hbs = require("hbs");

//EXPRESS
const app = express();
//configuracion de puerto
const port = 3000;
app.listen(port, () => console.log(`Ready on port ${port}`));
//********************************************************************

//APP
app.set("views", __dirname + "/views");

app.set("view engine", "hbs");

app.use("/public", express.static(__dirname + "/public"));


//PAGES
    //home
app.get("/", (req, res) => {
    res.render("home");

  });

    //about  
app.get("/about", (req, res) => {
    res.render("about",{
        autors: [
        {name: "Stant Lee", image: "https://diablorock.com/wp-content/uploads/2018/11/stan-lee-768x506.jpg" , bibliography: "Fue un escritor y editor de cómics estadounidense, además de productor y ocasional actor de cine. Es principalmente conocido por haber creado personajes icónicos del mundo.", link:"https://es.wikipedia.org/wiki/Stan_Lee"},
        {name: "Jack Kirby", image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Jack-Kirby_art-of-jack-kirby_wyman-skaar.jpg" , bibliography: "Fue un dibujante estadounidense. Se lo considera uno de los autores más influyentes de la historia del comic book estadounidense, y el dibujante de superhéroes por antonomasia.", link:"https://es.wikipedia.org/wiki/Jack_Kirby"}
        ]});

  });

  //gallery
app.get("/gallery", (req, res) => {
    res.render("gallery",{ 
        images : [
        {name: "Iroman", image: "http://cms.minoticia.pe/uploads/2019/04/03/5ca513511960b.jpeg"},
        {name: "Thor", image: "https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/78386.jpg" },
        {name: "Hulk", image: "http://3.bp.blogspot.com/-TmdridsGUws/XLDuznOKT7I/AAAAAAAAD_I/lvI_NjhfnnAX6ep8AOte8Q9kIucNOShXwCK4BGAYYCw/s1600/BB_01.png"},
        {name: "Captain America", image: "https://depor.com/resizer/I4SmmfeP3C604Qu4lz1Sazt1MgQ=/980x0/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/3GVWDU4D2ZDABMACONPJYOH55I.jpg"},
        {name: "Captain Marvel", image: "https://depor.com/resizer/vf2cidZLUINfVX9dCoeWsYQ55PA=/980x0/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/CB5YSPJJD5BYRCDR6WGNAGZZ3Y.jpg"},
        {name: "Black Widow", image: "https://depor.com/resizer/dULwXnXeuiCzDextnhwr20QTffU=/980x0/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/3KIM74THSNDBXIP67HQ2O46FBQ.jpg"},
        ]});


  });

