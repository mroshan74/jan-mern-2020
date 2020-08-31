const Picture = require('../models/picture')


module.exports.create = (req,res) => {
    console.log(req.file)
    const img = req.file
    const picture = new Picture({
      name: img.filename,
      originalName: img.originalname,
      path: img.path,
    })
    picture.save()
    .then((pic) => {
        res.json(pic)
    })
    .catch((err) => {
        res.json(err)
    })
}