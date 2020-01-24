const express = require("express");
const app = express();
const hbs = require("hbs");

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

app.use("/static", express.static(__dirname + "/static"));
app.use((req, res, next) => {
  res.locals = {
    home: false,
    about: false,
    photos: false
  };
  next();
});

app.get("/", (req, res) => {
  res.render("home", {
    home: true
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    about: true
  });
});
app.get("/photos", (req, res) => {
  const photo = [{
      photo: "/static/photos/acfb5505-d2f8-4c32-b42f-763274d765e3.jpeg",
      description: "Esta es mi dueña, nos queremos mucho"
    },
    {
      photo: "static/photos/a0676967-a5ee-40cd-a30a-351956363de1.jpeg",
      description: "Odio la lluvia"
    },
    {
      photo: "static/photos/193c7772-ba74-40b1-a9db-e4cb71bf8fe5.jpeg",
      description: "Aquí me pillaron relamiéndome"
    },
    {
      photo: "static/photos/GPTempDownload (1).jpeg",
      description: "En casa de unos amigos de mis dueños, jugando en el sofá"
    },
    {
      photo: "static/photos/GPTempDownload.jpeg",
      description: "Selfie con mi dueño"
    },
    {
      photo: "static/photos/IMG_0791.jpeg",
      description: "Esta soy yo de pequeña, en mi alfombra favorita"
    },
    {
      photo: "static/photos/IMG_4804.jpeg",
      description: "Esperando al tren en Principe Pio. Hay unos gatos muy salvajes en este sitio, a esos no me atrevo a decirles nada"
    },
    {
      photo: "static/photos/IMG_4825.jpeg",
      description: "El Parque del Oeste es mi parque, paso mucho tiempo aquí"
    },
    {
      photo: "static/photos/IMG_5009.jpeg",
      description: "En casa de los abuelos, ellos me cuidan muy bien y me dan cosas muy ricas de comer"
    },
    {
      photo: "static/photos/IMG_5521.jpeg",
      description: "Me llevan de la correa, pero yo sé andar suelta perfectamente"
    },
    {
      photo: "static/photos/IMG_5559.jpeg",
      description: "Con mi amiga Luna, es un poco intensita para mi gusto, pero yo la pongo en su sitio rápidamente",
    },
    {
      photo: "static/photos/IMG_5563.jpeg",
      description: "Este conejo está muerto, pero me gusta sacudirlo un par de veces al dia para asegurarme",
    },
    {
      photo: "static/photos/IMG_5628.jpeg",
      description: "¡¿Pelota?!"
    },
    {
      photo: "static/photos/IMG_5740.jpeg",
      description: "Esto no sé que es, pero no me mola un pelo"
    },
    {
      photo: "static/photos/IMG_6137.jpeg",
      description: "Otro colega del parque intentando quitar un palo"
    },
    {
      photo: "static/photos/IMG_6180.jpeg",
      description: "Este chubasquero es ridículo, pero insisten en ponermelo"
    },
    {
      photo: "static/photos/IMG_6300.jpeg",
      description: "Siesta con mi queridísima madre"
    },
    {
      photo: "static/photos/IMG_6334.jpeg",
      description: "¡Chuches!"
    },
    {
      photo: "static/photos/IMG_6721.jpeg",
      description: "Siesta en los brazos de mi padre"
    },
    {
      photo: "static/photos/IMG_7138.jpeg",
      description: "Posando con mi padre"
    },
  ];
  res.render("photos", {
    photo
  });
});

const port = 3000;
app.listen(port, () => console.log(`Ready express on port ${port}`));
