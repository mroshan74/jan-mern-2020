var md5 = require('crypto-js/md5')
const email = 'mroshan74@gmail.com'
console.log(email.toLowerCase())
const hashed = md5(email.toLowerCase()).toString()
console.log(hashed)