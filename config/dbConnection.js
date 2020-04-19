const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/wajdi_mouawad_livres", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(x => {
    console.log("connected to the database")
}).catch(err => console.error('Error connecting to mongo', err));