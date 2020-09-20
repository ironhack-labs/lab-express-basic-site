const mongoose = require("mongoose");

const quotesSchema = new mongoose.Schema({
  quote: String,
  from: String,
});

quotesSchema.statics.random = function (callback) {
  this.count(
    function (err, count) {
      if (err) {
        return callback(err);
      }
      var rand = Math.floor(Math.random() * count);
      this.findOne().skip(rand).exec(callback);
    }.bind(this)
  );
};

const quoteModel = mongoose.model("quotes", quotesSchema);



function reset(callback){
    async.parallel([
        quoteModel.remove.bind(quoteModel)
    ],
    function(err){
        if (err) throw err;
        callback();
    });
}

module.exports = {quoteModel: quoteModel, reset: reset};