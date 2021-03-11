const mongoose = require('mongoose');
require("./../app") ;
// require("./../../config/mongo") ;
const FriendModel = require("./../models/Friend.model")
const friends = [
    { name: 'Muriel', occupation: "juriste", age: 25 },
    { name: 'taki', occupation: "artist", age: 39 },
    { name: 'Nicolas', occupation: "Web dev" , age: 29 }
  ];
  FriendModel.insertMany(friends)
  .then(insertFriend => console.log(insertFriend))
  .catch(err => console.log(err))
