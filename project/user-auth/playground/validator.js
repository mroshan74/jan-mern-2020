const validator = require('validator')
const isEmail = require('validator/lib/isEmail')

console.log(validator.isEmail('mohd@gmail.com'))
console.log(isEmail('muhammed@mail.com'))