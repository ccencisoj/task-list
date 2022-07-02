const app = require("./app");
const mongoose = require("mongoose");
const port = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URL)
.then(()=> {
  app.listen(port, ()=> 
    console.log(`Server runinng on port ${port}`));
})
.catch(()=> {
  console.log("Failed DB conexion");
});