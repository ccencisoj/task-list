const KnownError = require("./KnownError");

class UserError extends KnownError {
  constructor(message) {
    super(message);
    this.name = "UserError";
    this.statusCode = 400;
  } 

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      statusCode: this.statusCode
    }
  }
}

module.exports = UserError;