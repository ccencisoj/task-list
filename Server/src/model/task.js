const {Schema, model } = require('mongoose');
const db = require('../libs/dbConection.js');

let task = new Schema({
    id: Number,
    title: {type: String, required: true},
    description: String,
    usuario: String,
    status: Boolean
});

task.set('toJSON', {
    transform: (document, returnObject)=>{
      delete returnObject._id;
      delete returnObject.__v;
      returnObject.example = true;   
    }
});

module.exports = model('tasks', task);