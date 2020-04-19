const mongoose = require("mongoose");

const livreSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true
    },
    editeur: String,
    annee: Number,
    couverture: String
});

const livreModel = mongoose.model("Livre", livreSchema);

module.exports = livreModel;