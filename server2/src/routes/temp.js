const router = require("express").Router();
const types = require("../types");
const validate = require("../helpers/validate");
const TempImage = require("../models/TempImage");

router.post("/image", 
validate.body({
  image: types.string().required()
}), async (req, res)=> {
  const imagePath = await saveImage(req.body.image);
  const tempImage = await TempImage.create({
    path: imagePath, 
    creationDete: Date.now(),
    maxDate: Date.now() + (120*60000)
  });
  res.json({tempImage});
}); 

module.exports = router;