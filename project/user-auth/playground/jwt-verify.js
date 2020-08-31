const jwt = require('jsonwebtoken')

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InJvc2hhbiIsImlhdCI6MTU4OTczODUyNiwiZXhwIjoxNTg5OTExMzI2fQ.V3fY-n_bUgd6gEkJ_bNf_SjexHPVOEAeRsY60rDdXX0'

// const data = jwt.verify(token, 'secret556')
// console.log(data)

let data
try {
    data = jwt.verify(token, 'secret556')
    console.log(data)
}
catch (err) {
    console.log({errors: err.message })
}