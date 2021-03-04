const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// // planing how the hacker document should like like, before database insertion
const bookSchema = new Schema({
  title: String,
  author: String,
  image: String,
  link: String,
});

const Book = mongoose.model("books", bookSchema);

module.exports = Book;
