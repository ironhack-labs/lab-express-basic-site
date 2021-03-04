require("../../.github/config/mongodb");
const dataSet = require("./hot-sauces.json");
const hsModel = require("../../.github/model/hot-sauces");

console.log(dataSet);
// console.log(hsModel);

hsModel.insertMany(dataSet)
.then(dbSuccess => {
    console.log(dbSuccess);
})
.catch(dbError => {
    console.log(dbError);
})