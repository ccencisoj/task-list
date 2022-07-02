const BodyError = require("../errors/BodyError");
const QueryError = require("../errors/QueryError");
const joi = require("joi");

const validateBody = (schema)=> {
  const validator = joi.object(schema);

  return (req, res, next)=> {
    const results = validator.validate(req.body);

    if(results.error)
      throw new BodyError(results.error.message);

    next();
  } 
}

const validateQuery = (schema)=> {
  const validator = joi.object(schema);

  return (req, res, next)=> {
    const results = validator.validate(req.query);

    if(results.error)
      throw new QueryError(results.error.message);

    next();
  } 
}

module.exports = {
  body: validateBody,
  query: validateQuery
};