const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nlSchema = new Schema({
    email: String,
});

const Newsletter = mongoose.model("Newsletter", nlSchema);

module.exports = Newsletter;