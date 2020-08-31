const jwt = require('jsonwebtoken')
const User = require('../models/user')

const authenticateUser = (req,res,next) => {
    const token = req.header('Autherization').split(' ')[1]
    //console.log(token)
    let tokenData
    try {
        tokenData = jwt.verify(token, 'secret007')
        User.findById(tokenData._id)
            .then((user) => {
                req.user = user
                next()
            })
            .catch((err) => {
                res.json(err)
            })
    }
    catch(err) {
        res.json({ errors: err.message })
    }
}

module.exports = {
    authenticateUser
}