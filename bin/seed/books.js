
require("./../../config/mongodb")

const dataSet = require("./data/books.json")

const Book = require("./../../model/Book")


Book.insertMany(dataSet)
.then(dbSuccess => {
    console.log(dbSuccess);
})
.catch(dbError => {
    console.log(dbError);
})