const express = require('express');
const app = express();
app.use(express.static('public'));
//rutas
app.get('/',(request,response)=>{
    response.sendFile(__dirname +'/views/home.html');

})
app.get('/about',(request,response)=>{
    response.sendFile(__dirname +'/views/about.html');

})
app.get('/photo',(request,response)=>{
    response.sendFile(__dirname +'/views/photo.html');

})
app.listen(3000,()=>{
    console.log("conexion exitosa")
})