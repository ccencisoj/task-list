const KnownError = require("../errors/KnownError");
const production = process.env.NODE_ENV === "production";

const errorMiddleware = (error, req, res, next)=> {
  if(production) {
    if(error instanceof KnownError) {
      return res.status(error.statusCode).json({
        name: "UnknownError",
        message: "Unknown Error"
      });
    }else {
      return res.status(500).json({
        name: "UnknowError",
        message: "Unknown Error"
      })
    }
  }else {
    if(error instanceof KnownError) {
      return res.status(error.statusCode).json(error.toJSON());
    }else {
      console.log(error);
      return res.status(error.statusCode).end("Check the console");
    }
  }
}

module.exports = errorMiddleware;