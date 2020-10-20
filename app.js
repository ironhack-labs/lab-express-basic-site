

const express= require("express");
const app=express();
app.use(express.static("public"))
app.get("/",(request,response,next)=>{
    response.sendFile(__dirname+"/views/index.html")
})
app.get("/about",(request,response,next)=>{
    response.sendFile(__dirname+"/views/about.html")
})
app.get("/works",(request,response,next)=>{
    response.sendFile(__dirname+"/views/works.html")
})
app.get("/photo_gallery",(request,response,next)=>{
    response.sendFile(__dirname+"/views/photo_gallery.html")
})
app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });



// // requerimos el paquete express
// const express = require("express");
// // ejecutamos express y guardamos el resultado en una constante
// const app = express();
// // Hacemos público el contenido de la carpeta public
// app.use(express.static("public"));
// // definimos una ruta para la home
// app.get("/", (request, response, next) => {
//   response.sendFile(__dirname + "/views/home-page.html");
// });
// app.get("/products", (request, response, next) => {
//   response.send("<h1>Product list</h1>");
// });
// app.get("/cat", (request, response, next) => {
//   response.sendFile(__dirname + "/views/cat-page.html");
// });
// app.get("/api", (request, response, next) => {
//   response.json({ message: "API test", data: "API data" });
// });
// app.listen(3000, () => {
//   console.log("App listening on port 3000!");
// });





// const server =http.createServer((request,response)=>{
//     if (request.url==="/"){
//         response.write("views/index.html");
//         response.end();
//     }  else if (request.url==="/about") {
//         response.write(__dirname+"/views/about.html");
//         response.end();
//     } else if (request.url==="/works") {
//         response.write("/views/works.html");
//         response.end();
//     } else if (request.url==="/photo_gallery") {
//         response.write("/views/photo_gallery.html");
//         response.end();
//     } else{
//         response.statusCode=404;
//         response.write("404 Page");
//         response.end();
//     }
   
// })
