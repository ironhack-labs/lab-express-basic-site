const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/stoic", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () =>
  console.log("We are connected to Stoic database :)")
);

mongoose.connection.on("error", () =>
  console.log("Database error")
);