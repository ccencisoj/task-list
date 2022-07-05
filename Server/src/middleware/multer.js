const multer = require('multer');
const path = require('path');

const uploadFile = ()=>{
    const storage = multer.diskStorage({
        destination: path.resolve(__dirname, '../uploads'),
        filename: function (__req, file, cb) {
          let nameOriginal = file.originalname;
          let reg = /\.svg|.jpg|.png|.jpeg/;
          let extencion = nameOriginal.substring(nameOriginal.search(reg), nameOriginal.length);
          cb(null, file.fieldname + '-' + Date.now()+extencion);
        },
        // path: (file)=>{
        //   let nameOriginal = file.originalname;
        //   path.resolve(__dirname, `./uploads/${nameOriginal}`);
        // }
    })
      
    const upload = multer({ storage: storage }).single('avatar');
    return upload;
}

module.exports = uploadFile;

