const joi = require("joi");
joi.objectId = require('joi-objectid')(joi);

const types = {
  string: joi.string,
  objectId: joi.string().regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i),
  username: joi.string().empty(false),
  email: joi.string().email({tlds: false}),
  password: joi.string().empty(false)
};

module.exports = types