const mongoose = require("mongoose");

mongoose 
  .connect("mongodb://localhost/kevin-smith-movies", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => 
    console.log(`Connected to Mongo! Database name: ${x.connections[0].name}"`)
  )
  .catch(err => console.log("Error connecting to Mongo", err));