const { Schema, model, Types } = require("mongoose");

const ImageSchema = new Schema({
  path: {type: String, required: true},
  user: {type: Types.ObjectId, ref: "User", required: true}
});

ImageSchema.set("toJSON", {
  transform: (docuemnt, returnedObject)=> {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Image = model("Image", ImageSchema);

module.exports = Image;