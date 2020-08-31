var mongoose = require('mongoose')
const sh = require('shorthash')
const validator = require('validator')

const Schema = mongoose.Schema
const urlSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: [4, 'title must be of minimum characters of 4']
    },
    originalUrl:{
        type: String,
        required: true,
        validate: {
            validator: function(value){
                return validator.isURL(value)
            },
            message: function(){
                return 'the url is not valid'
            }
        }
    },
    hashedUrl: {
        type: String  
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    clicks: [{
        clickDateTime: {
            type: Date,
            default: Date.now
        },
        ipAddress: {
            type: String
        },
        browser: {
            type: String
        },
        platform: {
            type: String
        },
        device: {
            type: String
        }
    }],
},{ timestamps: true})

urlSchema.pre('save',function(next){
    const getHashed = this.originalUrl
    this.hashedUrl = sh.unique(getHashed)
    next()
})

// urlSchema
//   .virtual('url')  // should be same as passed from and should not be in the model defined
//   .get(function () {
//     return this.hashUrl(this.originalUrl)
//   })
//   .set(function (url) {
//     this.hashedUrl = sh.unique(url)
//     this.originalUrl = url
//   })

// urlSchema.methods = {
//     hashUrl: function(url){
//         const getHashed = sh.unique(url)
//         console.log('FUN:', getHashed)
//         return getHashed
//     }
// }

const Url = mongoose.model('Url',urlSchema)

module.exports = Url