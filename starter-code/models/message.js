const mongoose = require("mongoose"); // import mongoose dependencie
const Schema = mongoose.Schema; // assign the Schema constructor to a const

// ... instanciate the Schema with option (the blueprint)
const messageSchema = new Schema({
  name: String,
  email: String,
  subject: String,
  message: String
});

const messageModel = mongoose.model("Message", messageSchema); // create a model using the schema
// a "Message" collection will be automatically created when inserting the first message in database
module.exports = messageModel;
