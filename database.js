// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/my_first_db", {
//     useNewUrlParser: true
// });

// const userSchema = new mongoose.Schema({
//     firstName: String,
//     lastName: String,
//     email: String,
//     password: String,
// })

// const userModel = mongoose.model("User", userSchema);

// userModel.create({
//     firstName: "Chpouit",
//     lastName: "Zblut",
//     email: "foo.bar@gmail.com",
//     password: "1234"
// }).then(dbResponse => {
//     console.log(dbResponse);
// }).catch(dbError => {
//     console.log(dbError);
// });

// userModel.find({}).then(dbResponse => {
//     console.log(dbResponse);
// }).catch(dbErr => {
//     console.log(dbErr);
// });

// userModel.findByIdAndRemove("THE ID").then(dbResponse => {
//     console.log(dbResponse);
// }).catch(dbErr => {
//     console.log(dbErr);
// });

// userModel.findByIdAndUpdate("THE ID", {
//     firstName: "Mat"
// }, {new: true}).then(dbResponse => {
//     console.log(dbResponse);
// }).catch(dbErr => {
//     console.log(dbErr);
// });
