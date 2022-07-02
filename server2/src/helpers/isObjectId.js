const types = require("../types");

const isObjectId = (value)=> {
  const results = types.objectId.validate(value);
  return results.error == null ? true : false;
}

module.exports = isObjectId;