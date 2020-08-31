const bcryptjs = require('bcryptjs')
const password = 'roshan123'
const encrypt = '$2a$10$sNwMJgnrgS2OM0BE/wXkO.jPoZqzKAPL3YZgUPVU0JfZPFs9AWhFu'

bcryptjs.compare(password,encrypt)
.then((match) => {
    console.log(match)
})