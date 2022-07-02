const { Schema, model } = require("mongoose");

const TempSchema = new Schema({
  path: {type: String, required: true},
});

TempSchema.set("toJSON", {
  transform: (docuemnt, returnedObject)=> {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.path;
  }
});

const Temp = model("Temp", TempSchema);

module.exports = Temp;