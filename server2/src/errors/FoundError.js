const KnownError = require("./KnownError");

class FoundError extends KnownError {
  constructor(message) {
    super(message);
    this.name = "FoundError";
    this.statusCode = 404;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      statusCode: this.statusCode
    }
  }
}

module.exports = FoundError;