const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const familySchema = new Schema({
  
  nickname: {
    type: String,
    enum: ["Dupont", "Durand", "Salvetti"],
  }
});

const FamilyModel = mongoose.model("Families", familySchema);

module.exports = FamilyModel;
