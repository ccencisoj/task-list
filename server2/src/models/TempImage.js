const { Schema, model } = require("mongoose");

const TempImageSchema = new Schema({
  path: {type: String, required: true},
  creationdate: {type: String, required: true},
  maxDate: {type: String, required: true}
});

TempImageSchema.set("toJSON", {
  transform: (docuemnt, returnedObject)=> {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.path;
    delete returnedObject.creationdate;
    delete returnedObject.maxDate;
  }
});

const TempImage = model("TempImage", TempImageSchema);

module.exports = TempImage;