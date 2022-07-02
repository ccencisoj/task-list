const router = require("express").Router();
const Temp = require("../models/Temp");
const upload = require("../helpers/upload");
const ImageError = require("../models/Image")

router.post("/image", 
upload.single("image"),
async (req, res)=> {
  const image = req.file;

  if(image == null) 
    throw new ImageError("Se necesita la imagen");

  const temp = await Temp.create({path: image.path});
  res.json({image: temp.id});
}); 

module.exports = router;