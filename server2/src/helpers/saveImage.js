const { nanoid } = require("nanoid");
const fs = require("fs");
const path = require("path");

const saveImage = async (imageDataURL)=> {
  const imagePath = path.resolve(`./statics/${nanoid()}.jpg`);
  fs.writeFileSync(imagePath, imageDataURL);
  return imagePath;
}

module.exports = saveImage;