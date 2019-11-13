/*jshint esversion: 6 */

// requeri la libreria de express
const express = require("express");

// cree el servidor de express
const app = express();

// config express
app.use(express.static(__dirname + "/public"));

// rutas
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html");
  });

// echamos a andar el servidor
app.listen(3000, () => {
  console.log(`Running on http://localhost:3000`);
});


// //slider
// let slideIndex = 0;
// let timer; //set and clear intervals
// const myImages = [
//     {
//         "img": 'https://i.postimg.cc/DwhjRqH4/polaroi7.png',
//     },
//     {
//         "img": 'https://i.postimg.cc/gk8tMMSP/polaroi6.png',
//     },
//     {
//         "img": 'https://i.postimg.cc/fW3rdWYy/polaroid2.png'

//     },
//     {
//         "img": 'https://i.postimg.cc/qqCyv5hB/polaroid3.png'

//     },
//     {
//         "img": 'https://i.postimg.cc/SxGT4nbT/polaroid5.png'

//     },
//     {
//         "img": 'https://i.postimg.cc/mZ06yxSw/polaroid.png'

//     },
//     {
//         "img": 'https://i.postimg.cc/nMb7jGB4/polaroid4.png'

//     }
// ];



// function builder(){
//     // console.log(myImages);
//     // console.log('myImages');
//     for(let x=0; x<myImages.length; x++){
//         let slide = document.createElement('div');
//         slide.setAttribute("class", "myslides fade");
//         let img = document.createElement("img");
//         img.setAttribute("src",myImages[x].img);
//         console.log(img);
//     }
// }
// builder();