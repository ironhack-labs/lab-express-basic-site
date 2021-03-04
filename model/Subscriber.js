const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// // planing how the hacker document should like like, before database insertion
const subscriberSchema = new Schema({
  email: String,
  fullname:String,
});

const Subscriber = mongoose.model("subscriber", subscriberSchema);

module.exports = Subscriber;
