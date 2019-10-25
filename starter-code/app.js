const express = require("express");
const app = express();
app.use(express.static("public"));

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get("/", (req, res, next) => {
  let data = {
    elements: [
      { name: "home", dir: "/" },
      { name: "about", dir: "/about" },
      { name: "portfolio", dir: "/photo-gallery" }
    ],

    sentence: "We Love Webs Design",
  };

  res.render("home", data);
});

app.get("/about", (req, res, next) => {


  let data = {
    elements: [
      { name: "home", dir: "/" },
      { name: "about", dir: "/about" },
      { name: "portfolio", dir: "/photo-gallery" }
    ],

    title: "WE WEBS",

    text:
    "Proyectos web creativos, con un diseño único para cada cliente y cada sector. Logramos que te diferencies de la competencia siendo innovador. Creamos plantillas wordpress personalizadas y a medida con panel de control para que puedas realizar los cambios.",
    cities: ["wewebs", "foxium", "quam", "paisajista as", "ba-solution", "burnout", "quabbala", "quabbala uk", "quabbala hk", "vmp", "tuero aivar", "..."],
    

    boton: "gallery",
    botonTo: "/photo-gallery",


    

    bird: "x",
    picture: "/images/pic.png",
    
  };
  res.render("about", data);
});

app.get("/photo-gallery", (req, res, next) => {
  let data = {
    elements: [
      { name: "home", dir: "/" },
      { name: "about", dir: "/about" },
      { name: "portfolio", dir: "/photo-gallery" }
    ],

    pics: [
      {image: "/images/1.png", name: "wewebs", dir:"http://www.wewebs.es"},
      {image: "/images/2.png", name: "foxium", dir:"http://foxiumarquitectura.com/"},
      {image: "/images/3.png", name: "VMP", dir:"http://victoriamunozphoto.com/"},
      {image: "/images/4.png", name: "Sampedro Paisajimo", dir:"http://www.alvarosampedro.com/en/"},
      {image: "/images/5.png", name: "Tuero Aivar", dir:"http://tueroaivar.com/"},
      {image: "/images/6.png", name: "burnout", dir:"http://bornout.wewebs.es/"},
      {image: "/images/7.png", name: "BA", dir:"http://ba-solution.com/"},
      {image: "/images/8.png", name: "quam", dir:"http://quamarquitectura.com/"},
      {image: "/images/9.png", name: "landaluce", dir:"http://www.youtuberunagranjaenafrica.es"},
      {image: "/images/2.png", name: "quabbala es", dir:"https://quabbala.com/"},
      {image: "/images/1.png", name: "quabbala uk", dir:"https://quabbala.co.uk/"},
      {image: "/images/5.png", name: "quabbala hk", dir:"https://hk.quabbala.com/"}
    ],

    contact: "contacto",
    nombre: "Aitor Arina",
    mail: "aitorarina@wewebs.es",
    mailto: "mailto:aitorulz1@gmail.com",
    phone: "+34 647 528 579",
    phoneto: "callto:0034647528579",
}
  res.render("photo-gallery", data );
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
