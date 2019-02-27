// Requerir Express
const  express  =  require ( 'express' )

// Express servidor de manejo de solicitudes y respuestas
const  app  =  express ()

// Hacer todo dentro de público / disponible
aplicación . uso ( express . static ( 'public' ))

// nuestra primera ruta:
aplicación . obtener ( '/' , ( solicitud , respuesta , siguiente ) => {
  respuesta . sendFile ( __dirname  +  '/views/index.html' )
})

// ruta del gato:
aplicación . get ( ' / cat ' , ( solicitud , respuesta , siguiente ) => {
  respuesta . sendFile ( __dirname  +  ' /views/cat.html ' )
})

// Servidor iniciado
aplicación . escuchar ( 3000 , () => {
  consola . log ( '¡ Mi primera aplicación escuchando en el puerto 3000! ' )
})