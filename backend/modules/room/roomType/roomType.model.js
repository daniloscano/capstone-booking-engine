const mongoose = require('mongoose')

const RoomTypeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true,
            max: 5
        },
        category: {
            type: String,
            unique: true,
            required: true,
            max: 5
        },
        description: {
            type: String,
            required: true
        },
        bedsId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'roomBed'
        },
        amenitiesIds: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'roomAmenity'
            }
        ],
        dimensions: {
            type: String,
            required: true
        },
        images: [
            {
                type: String
            }
        ],
        baseOccupancy: {
            type: Number,
            required: true
        },
        maxOccupancy: {
            type: Number,
            required: true
        },
        hasCrib: {
            type: Boolean,
            required: true,
            default: false
        },
        ordinal: {
            type: Number,
            required: true
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('roomType', RoomTypeSchema, 'roomTypes')