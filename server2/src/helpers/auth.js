const AuthError = require("../errors/AuthError");

const authRequired = ()=> {
  return async (req, res, next)=> { 
    if(req.session.user == null)
      throw new AuthError("Debes iniciar session");
    next(); 
  }
}

module.exports = {
  required: authRequired
};  