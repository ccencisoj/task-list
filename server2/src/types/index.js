const joi = require("joi");
const task = require("../constants/task");

joi.objectId = require('joi-objectid')(joi);

const types = {
  string: joi.string,
  objectId: joi.string().regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i),
  username: joi.string().empty(false),
  email: joi.string().email({tlds: false}),
  password: joi.string().empty(false),
  taskState: joi.string().valid(
    task.PENDING_STATE, 
    task.DOING_STATE,
     task.DONE_STATE)
};

module.exports = types