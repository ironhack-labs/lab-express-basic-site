const mongoose = require('mongoose');
require("../../app") ;
const FamilyModel = require("../../models/Family.model")
const family = [
    { nickname: 'Dupont' },
    { nickname: 'Durand' },
    { nickname: 'Salvetti'},
    
   
    
  ];
  FamilyModel.insertMany(family)
  .then(insertFamily => console.log(insertFamily))
  .catch(err => console.log(err))