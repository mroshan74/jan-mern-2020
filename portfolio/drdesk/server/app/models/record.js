const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
    doctor:{
        type: Schema.Types.ObjectId,
        ref:'user'
    },
    patient:{
        type: Schema.Types.ObjectId,
        ref:'user'
    },
    medication: [{
            medicine:{
                type: Schema.Types.ObjectId,
                ref:'pharmacy'
            },
            times: {
                type: String
            },
            mode: {
                type: String
            }
    }],
    createdAt:{
        type: Date,
        default: Date.now()
    }
},{timestamps: true})

const Record = mongoose.model('Record',recordSchema)
module.exports = Record