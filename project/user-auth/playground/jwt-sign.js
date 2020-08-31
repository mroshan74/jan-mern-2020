const jwt = require('jsonwebtoken')

const payload = {
    id:1,
    name: 'roshan'
}

const secretKey = 'secret556'

const token = jwt.sign(payload,secretKey,{ expiresIn: '2d'})

console.log(token)