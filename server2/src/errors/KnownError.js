class KnownError extends Error {
  constructor(message) {
    super(message);
    this.name = null;
    this.statusCode = null;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      statusCode: this.statusCode
    }
  }
}

module.exports = KnownError;