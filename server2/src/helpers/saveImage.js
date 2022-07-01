const nanoid = require("nanoid");
const fs = require("fs");
const toBuffer = require("data-uri-to-buffer");

const saveImage = async (imageDataURL)=> {
  const imageBuffer = toBuffer(imageDataURL);
  const imagePath = path.resolve(`/statics/${nanoid()}.jpg`);
  fs.writeFileSync(imagePath, imageBuffer);
  return imagePath;
}

module.exports = saveImage;