const mongoose = require("mongoose"); // Import mongoose
const Schema = mongoose.Schema; // Assign the Schema

// Create the Model
const GospelSingersSchema = new Schema({
  name: { type: String, required: true },
  image: {
    type: String,
    value: "https://i.ytimg.com/vi/SMzXRnsOcMI/maxresdefault.jpg"
  },
  description: { type: String },
  videos: { type: Array }
});

const gospelModel = mongoose.model("GospelSingers", GospelSingersSchema);
module.exports = gospelModel;
