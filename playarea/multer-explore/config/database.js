const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/multer'

const configureDB = () => {
    mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('connected to db-multer...')
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = configureDB