const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String
    },
    number:{
        type: Number
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User