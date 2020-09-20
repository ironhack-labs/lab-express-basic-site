const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  message: String,
});

const messageModel = mongoose.model("message", messageSchema);

module.exports = messageModel; // use this object to interact with (CRUD)
