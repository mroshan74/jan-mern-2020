const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const userControllers = {}

userControllers.register = (req,res) => {
    const body = req.body
    const user = new User(body)
    user.save().then(user => res.json(user))
    .catch(err => res.json(err))
}

userControllers.login = (req,res) => {
    const body = req.body
    User.findOne({
        $or: [ {username: body.identifier} , {email: body.identifier} ]
    })
        .then(user => {
            if(user){
                bcryptjs.compare(body.password,user.password)
                    .then(match => {
                        if(match){
                            const tokenData = {
                                username: user.username,
                                email: user.email,
                                _id: user._id
                            }
                            const token = jwt.sign(tokenData,'athena786',{expiresIn: '12h'})
                            User.findOneAndUpdate({_id:user._id},{token},{new:true})
                                .then(user => console.log(user))
                                .catch(err => console.log(err))
                            res.json({token})
                        }
                        else{
                            res.json({ errors : 'invalid username or password'})
                        }
                    }).catch(err => res.json(err))
            }
            else{
                res.json({ errors: 'invalid username or password'})
            }
        }).catch(err => res.json(err))
}

module.exports = userControllers