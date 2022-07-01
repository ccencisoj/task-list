const KnownError = require("./KnownError");

class ImageError extends KnownError {
  constructor(message) {
    super(message);
    this.name = "ImageError";
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

module.exports = ImageError;