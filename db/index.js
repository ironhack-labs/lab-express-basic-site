const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost/ironshop')
    .then(connectionInfo => console.log(`Connected to Mongo! Database name: "${connectionInfo.connections[0].name}"`))
    .catch(err => console.log('Error conectando a la BBDD:', err))