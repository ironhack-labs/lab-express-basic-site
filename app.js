const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

//Route handlers 


//App 
app.listen(process.env.PORT || 3000, () => console.log("🏃‍ on port 3000"));
