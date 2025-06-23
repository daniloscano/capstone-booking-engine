const mongoose = require('mongoose')

const RoomUnitSchema = new mongoose.Schema(
    {
        number: {
            type: String,
            required: true
        },
        roomTypeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'roomType'
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('roomUnit', RoomUnitSchema, 'roomUnits')