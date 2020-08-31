const mongoose = require('mongoose')
const Schema = mongoose.Schema
const pharmacySchema = new Schema({
    medicine_name: {
        type:String,
        required: true
    },
    generic_name: String,
    alt_name: String,
    manufacturer: {
        type: String,
        required: true
    },
    cost: Number,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    approval: {
        type: Boolean,
        default: false 
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
},{timestamps: true})

const Pharmacy = mongoose.model('Pharmacy',pharmacySchema)
module.exports = Pharmacy
