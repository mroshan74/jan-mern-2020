const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const usersController = {}

usersController.register = (req, res) => {
  const body = req.body
  const user = new User(body)  // created an object and body is assigned as a value
  bcryptjs.genSalt().then((salt) => {
    bcryptjs.hash(user.password, salt)  // created a object above and extracted the password from it
    .then((encrypted) => {
      user.password = encrypted  // re-saved the encrypted password to the user object
      user
        .save()
        .then((user) => {
          res.json(user)
        })
        .catch((err) => {
          res.json(err)
        })
    })
  })
}

usersController.login = (req,res) => {
    const body = req.body
    User.findOne({ email: body.email })
        .then((user) => {
            if(!user){
                res.json({ error: 'invalid user or password' })
            }
            bcryptjs
              .compare(body.password, user.password)
              .then((match) => {
                if (match) {
                    const tokenData = {
                        _id: user._id,
                        username: user.username,
                        email: user.email
                    }
                    const token = jwt.sign(tokenData, 'secret007', { expiresIn: '2d' })
                    res.json({token : `bearer ${token}`})
                } else {
                  res.json({ error: 'invalid user or password' })
                }
              })
              .catch((err) => {
                res.json(err)
              })
        })
        .catch((err) => {
            res.json(err)
        })
}

usersController.account = (req,res) => {
    res.json(req.user)
}

module.exports = usersController
