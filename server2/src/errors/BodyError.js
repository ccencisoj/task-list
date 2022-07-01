const KnownError = require("./KnownError");

class BodyError extends KnownError {
  constructor(message) {
    super(message);
    this.name = "BodyError";
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

module.exports = BodyError;