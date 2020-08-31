const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const isEmail = require('validator/lib/isEmail')
const md5 = require('crypto-js/md5')

const Schema = mongoose.Schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 64
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(v){
                return isEmail(v)
            },
            message: function(v){
                return 'The email is invalid'
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 128,
    },
    role: {
        type: Number,
        default: 1
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    avatarUrl: {
        type: String,
    },
    token:{
        type:String,
        default: null
    },
    records: [{
        type: Schema.Types.ObjectId,
        ref:'record'
    }],
    appointments: [{
        type: Schema.Types.ObjectId,
        ref:'appointment'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    DOB: {
        type: Date
    },
    favorites: [],
    rating: {
        type: Number,
        default: 0
    }
})

userSchema.pre('save', function(next){
    //this.rating += this.rating
    const hashed = md5(this.email.toLowerCase()).toString()
    const url = `https://www.gravatar.com/avatar/${hashed}?s=200&d=identicon`
    this.avatarUrl = url
    bcryptjs.genSalt()
        .then(salt => {
            bcryptjs.hash(this.password, salt)
                .then(encrypted => {
                    this.password = encrypted
                    next()
                }) 
        })
})

const User = mongoose.model('User',userSchema)
module.exports = User