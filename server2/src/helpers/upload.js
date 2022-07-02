const multer = require("multer");
const path = require("path");

const upload = multer({dest: path.resolve("./statics")});

module.exports = upload;