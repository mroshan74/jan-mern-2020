const Users = require('../models/user')

// GET users
module.exports.list = ((req, res) => {
  Users.find()
    .then((users) => {
      res.json(users)
    })
    .catch((err) => {
      res.json(err)
    })
})

// POST user
module.exports.create = ((req, res) => {
  const body = req.body
  const user = new Users(body)
  user
    .save()
    .then((user) => {
      res.json(user)
    })
    .then((err) => {
      res.json(err)
    })
})

// GET single user
module.exports.show = ((req, res) => {
  const id = req.params.id
  Users.findById(id)
    .then((user) => {
        if(user){
            res.json(user)
        }else{
            res.json({})
        }
    })
})

// POST update user
module.exports.update = ((req,res) => {
    const id = req.params.id
    const body = req.body
    Users.findByIdAndUpdate(id, body , {
        new: true, runValidators: true
    })
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            res.json(err)
        })
})

// DELETE user
module.exports.destroy = ((req,res) => {
    const id = req.params.id
    Users.findByIdAndDelete(id)
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            res.json(err)
        })
})
