const mongoose = require('mongoose')

const ExtraServiceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        allocation: {
            type: String,
            required: true,
            default: 'none',
            enum: [ 'none', 'perNight', 'perAdult', 'perChild' ]
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('extraService', ExtraServiceSchema, 'extraServices')