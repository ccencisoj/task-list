const router = require("express").Router();
const User = require("../models/User");
const path = require("path");
const types = require("../types");
const UserError = require("../errors/UserError");
const validate = require("../helpers/validate");

router.post("/signIn", 
validate.body({
  email: types.email.required(),
  password: types.password.required()
}), async (req, res)=> {
  const userData = req.body;
  let user = await User.findOne(userData);
  
  if(user == null) 
    throw new UserError("Correo o contraseña es incorrecto");

  req.session.user = {
    image: user.image,
    username: user.username,
    email: user.email
  };

  res.json({user});
}); 

router.post("/signUp", 
validate.body({
  username: types.username.required(),
  email: types.email.required(),
  password: types.password.required()
}), async (req, res)=> {
  const _user = req.body;

  if(_user.image == null)
    _user.image = path.resolve("statics/user1.svg");

  const user = await User.create(_user);

  req.session.user = {
    image: user.image,
    username: user.username,
    email: user.email
  };

  res.json({user});
}); 

router.get("/current", (req, res)=> {
  const user = req.session.user.id;
  res.json({user: user || null});
});

router.get("/signOut", (req, res)=> {
  req.session.destroy();
  res.json({success: true});
});

module.exports = router;