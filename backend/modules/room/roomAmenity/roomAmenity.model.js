const mongoose = require('mongoose')

const RoomAmenitySchema = new mongoose.Schema(
    {
        code: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('roomAmenity', RoomAmenitySchema, 'roomAmenities')