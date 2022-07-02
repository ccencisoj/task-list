const { Schema, model, Types } = require("mongoose");

const TaskSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: false},
  state: {type: String, required: true},
  user: {type: Types.ObjectId, ref: "User", required: true}
});

TaskSchema.set("toJSON", {
  transform: (docuemnt, returnedObject)=> {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Task = model("Task", TaskSchema);

module.exports = Task;