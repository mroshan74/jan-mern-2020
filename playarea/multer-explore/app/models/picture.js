const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pictureSchema = new Schema({
    originalName: String,
    name: String,
    path: String
})
 const Picture = mongoose.model('Picture',pictureSchema)
 module.exports = Picture