const mongoose =require('mongoose')
const Schema = mongoose.Schema
const appointmentSchema = new Schema({
    date: {
        type: String
    },
    schedules: [],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    createdFor: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
})

const Appointment = mongoose.model('Appointment',appointmentSchema)
module.exports = Appointment