const KnownError = require("./KnownError");

class QueryError extends KnownError {
  constructor(message) {
    super(message);
    this.name = "QueryError";
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

module.exports = QueryError;