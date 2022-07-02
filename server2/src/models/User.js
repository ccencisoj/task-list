const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  image: {type: String, required: false},
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true}
});

UserSchema.set("toJSON", {
  transform: (docuemnt, returnedObject)=> {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password;
  }
});

const User = model("User", UserSchema);

module.exports = User;