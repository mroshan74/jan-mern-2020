const Url = require('../models/url')

module.exports.list = (req, res) => {
  Url.find()
    .then((urls) => {
      res.json(urls)
    })
    .catch((err) => {
      res.json(err)
    })
}

module.exports.create = (req, res) => {
  const body = req.body
  const url = new Url(body)
  url
    .save()
    .then((urls) => {
      res.json(urls)
    })
    .catch((err) => {
      res.json(err)
    })
}

module.exports.show = (req, res) => {
  const id = req.params.id
  Url.findById(id)
    .then((url) => {
      res.json(url)
    })
    .catch((err) => {
      res.json(err)
    })
}

module.exports.destroy = (req, res) => {
  const id = req.params.id
  Url.findByIdAndDelete(id)
    .then((url) => {
      res.json(url)
    })
    .catch((err) => {
      res.json(err)
    })
}

module.exports.update = (req, res) => {
  const id = req.params.id
  const body = req.body
  Url.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((url) => {
      res.json(url)
    })
    .catch((err) => {
      res.json(err)
    })
}

module.exports.redirect = (req, res) => {
  const hash = req.params.hash
  const clientData = req.useragent
  const ip = req.clientIp
  const click = {
    ipAddress: ip,
    browser: clientData.browser,
    platform: clientData.platform,
    device: clientData.Mobile ? 'Mobile' : 'Desktop',
  }
  //console.log(clientData)
  // console.log(click)
  // Url.find(
  Url.findOneAndUpdate(
    { hashedUrl: hash },
    { $push: { clicks: click } },
    { new: true, runValidators: true }
  )
    .then((url) => {
      const redirect = url[0].originalUrl
      //res.json(url)
      res.redirect(redirect)
    })
    .catch((err) => {
      res.json(err)
    })
}
