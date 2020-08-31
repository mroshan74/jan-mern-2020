const bcryptjs = require('bcryptjs')
const password = 'roshan123'

bcryptjs.genSalt()
.then((salt) => {
  console.log(salt)
  bcryptjs.hash(password, salt)
  .then((encrypted) => {
    console.log('encrypted', encrypted)
  })
})
