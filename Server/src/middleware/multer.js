const multer = require('multer');
const path = require('path');

const uploadFile = ()=>{
    const storage = multer.diskStorage({
        destination: path.resolve(__dirname, '../uploads'),
        filename: function (__req, file, cb) {
          cb(null, file.fieldname + '-' + Date.now())
        }
    })
      
    const upload = multer({ storage: storage }).single('avatar');
    return upload;
}

module.exports = uploadFile;

