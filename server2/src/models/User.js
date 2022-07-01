const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  image: {type: String, required: true},
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true}
});

UserSchema.set("toJSON", {
  transform: (docuemnt, returnedObject)=> {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const User = model("User", UserSchema);

module.exports = User;