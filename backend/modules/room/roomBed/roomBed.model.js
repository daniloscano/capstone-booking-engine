const mongoose = require('mongoose')
const generateLayout = require('../../../shared/utils/roomBed')

const RoomBedSchema = new mongoose.Schema(
    {
        king: {
            type: Number,
            required: true,
            default: 0
        },
        single: {
            type: Number,
            required: true,
            default: 0
        },
        crib: {
            type: Number,
            required: true,
            default: 0
        },
        layout: {
            type: String,
            required: false
        }
    }, { timestamps: true, strict: true }
)

RoomBedSchema.pre('save', async function(next) {
    const roomBed = this

    if (!roomBed.isModified()) {
        return next()
    }

    try {
        roomBed.layout = generateLayout(roomBed.king, roomBed.single, roomBed.crib)

        next()
    } catch (err) {
        next(err)
    }
})

RoomBedSchema.pre('findOneAndUpdate', async function(next) {
    const update = this.getUpdate()
    const id = this.getQuery()._id

    try {
        const document = await this.model.findById(id)
        if (!document) return next()

        const kingUpdate = update.king ?? document.king
        const singleUpdate = update.single ?? document.single
        const cribUpdate = update.crib ?? document.crib

        update.layout = generateLayout(kingUpdate, singleUpdate, cribUpdate)
        this.setUpdate(update)

        next()
    } catch (err) {
        next(err)
    }
})

module.exports = mongoose.model('roomBed', RoomBedSchema, 'roomBeds')