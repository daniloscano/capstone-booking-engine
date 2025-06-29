const mongoose = require('mongoose')

const AncillarySchema = new mongoose.Schema(
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
            enum: [ 'none', 'perNight', 'perOccupancy' ]
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('ancillary', AncillarySchema, 'ancillaries')