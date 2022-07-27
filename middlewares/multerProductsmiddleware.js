const path = require('path');
const multer = require ('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img')
    },

    filename: function (req, file, cb) {
       
      cb(null,  Date.now() + '_imagen' + path.extname(file.originalname) )}
  })
  
  const upload = multer({ storage: storage })

module.exports = upload