const mongoose = require('mongoose')

const configureDB = () => {
    mongoose.connect('mongodb://localhost:27017/user-auth',{
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('connected to db --> user-auth')
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = configureDB