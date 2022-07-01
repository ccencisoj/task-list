const KnownError = require("./KnownError");

class AuthError extends KnownError {
  constructor(message) {
    super(message);
    this.name = "AuthError";
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

module.exports = AuthError;