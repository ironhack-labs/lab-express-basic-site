// 1.  Se declara express primero porque lo necesitamos o requeriamos , será nuestra libreria o framework
const express = require('express')
//2.  necesitamos llamar a nuestro servidor app 
//   El servidor express manipulará las solicitudes y respuestas o requests/responses
const app = express()

//  Usamos el verbo HTTP 'use' para acceder a las carpetas con express usando el metodo static y que sea de caracter publico 
app.use(express.static('public'))

//3.  ahora vamos a crear las rutas:
app.get('/',(req, res,next) =>{
    console.log('funciona')
    res.sendFile(__dirname + '/views/index.html')//esto es lo que respondemos al cliente con el verbo http send cuando el cliente pide o solicita acceso al inidce de nuestra pagina por medio del slash /
    //respone contiene la info que el cliente solicita

})

//5.  Vamos crear las rutas hacia las carpetas usando el verbo get
app.get('/about',(req, res, next) => {
    res.sendFile(__dirname + `/views/about.html`)
})
app.get('/gallery',(req, res, next) =>{
    res.sendFile(__dirname + '/views/gallery.html' )
})
//4.  aqui le dirremos a nuestro puerto que escuche continuamente a las solicitudes del cliente en el puerto 3000
app.listen(3000, () =>{ console.log('app is listening at port 3000 or http://localhost:3000')})
