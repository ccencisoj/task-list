const router = require("express").Router();
const User = require("../models/User");
const Temp = require("../models/Temp");
const Image = require("../models/Image");
const path = require("path");
const bcrypt = require("bcrypt");
const types = require("../types");
const auth = require("../helpers/auth");
const UserError = require("../errors/UserError");
const validate = require("../helpers/validate");
const isObjectId = require("../helpers/isObjectId")
const resolveRoute = require("../helpers/resolveRoute");
const startUserSession = require("../helpers/startUserSession");
const endUserSession = require("../helpers/endUserSession");

router.post("/signUp", 
validate.body({
  image: types.objectId.allow(null, "").optional(),
  username: types.username.required(),
  email: types.email.required(),
  password: types.password.required()
}), async (req, res)=> {  
  const password = req.body.password;
  const passwordHash = bcrypt.hashSync(password, 8);

  const user = await User.create({
    image: resolveRoute(req, "/image"),
    username: req.body.username,
    email: req.body.email,
    password: passwordHash
  });

  const imageId = req.body.image;

  if(isObjectId(imageId)) {
    const tempImage = await Temp.findOne({_id: imageId});

    if(!(tempImage == null)) 
      await Image.create({path: tempImage.path, user: user.id});
  }

  await startUserSession(req, user);

  res.json({user});
}); 

router.post("/signIn", 
validate.body({
  email: types.email.required(),
  password: types.password.required()
}), async (req, res)=> {
  const user = await User.findOne({email: req.body.email});
  
  if(user == null) 
    throw new UserError("Correo o contraseña es incorrecto");
    
  const password = req.body.password;
    
  if(!bcrypt.compareSync(password, user.password))
    throw new UserError("Correo o contraseña es incorrecto");

  await startUserSession(req, user);
  
  res.json({user});
}); 

router.get("/image",
auth.required(),
async (req, res)=> {
  const user = req.session.user;
  const image = await Image.findOne({user: user.id}).sort({$natural:-1});

  if(image == null) 
    return res.setHeader("Content-Type", "image/svg")
      .sendFile(path.resolve("./statics/user1.svg"));

  res.setHeader("Content-Type", "image/jpeg");
  res.sendFile(path.resolve(image.path));
});

router.get("/current", (req, res)=> {
  const user = req.session.user;
  res.json({user: user || null});
});

router.get("/signOut", async (req, res)=> {
  await endUserSession(req);
  res.json({success: true});
});

module.exports = router;