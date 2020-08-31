const express = require('express')
const router = express.Router()

var multer = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
  },
})

var upload = multer({ storage: storage })

const picturesController = require('../app/controllers/picturesController')

router.post('/upload',upload.single('pic'),picturesController.create)

module.exports = router