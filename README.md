![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Iteraciones Madrid - Express Basic Site Shop

## Iteración 1

Crea una página de inicio:
- Crea una vista de HBS que incluya información de presentación de la tienda.
- Muéstrala bajo la URL `/`

## Iteración 2

Crea una página de tienda:
- Descárgate el JSON `products.json` que encontrarás en este mismo repo.
- Crea mediante MongoDB Compass una BBDD de nombre `ironshop` y una colección `products` en la que importar los datos del JSON.
- Crea en tu aplicación el directorio `models` con el modelo `Product.model.js` y configúralo siguiendo la estructura de los productos del JSON.
- Crea en tu aplicación el directorio `db` con la conexión a tu base de datos (recuerda, el nombre del string de conexión debe coincidir con el nombre de la base de datos).
- Crea una vista de HBS e implementa, a través del patrón MVC, un sistema que permita enviar todos los productos desde la BBDD hasta la vista, mostrándolos de la forma que creas conveniente (columnados, con botón _Comprar_ no funcional, etcétera). La transacción de la base de datos debe estar:
  - Proyectada: omite todos los datos de los productos que no muestres en la vista.
  - Ordenada: muestra los productos ordenados por su precio, de menor a mayor.
- Muéstrala bajo la URL `/tienda`


Japi coding! 💙
