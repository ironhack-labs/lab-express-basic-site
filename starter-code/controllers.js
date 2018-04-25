exports.home = (req,res) =>{
  res.sendFile(__dirname + "/public/views/index.html");
};

exports.about = (req,res) =>{
  res.sendFile(__dirname + "/public/views/index2.html")
};

exports.gallery = (req,res) =>{
  res.sendFile(__dirname + "/public/views/index3.html")
}