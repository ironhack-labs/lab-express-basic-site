const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  Prénom: String,
  Nom: String,
  Age: Number,
  Pays: String
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
