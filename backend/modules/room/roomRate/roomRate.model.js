const mongoose = require('mongoose')
const RoomUnit = require('../roomUnit/roomUnit.model')
const {formattedDate} = require("../../../shared/utils/dates")

const RoomRateSchema = new mongoose.Schema(
    {
        roomTypeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'roomType'
        },
        totalUnits: {
            type: Number,
            required: false
        },
        soldUnits: {
            type: Number,
            required: true,
            default: 0
        },
        availableUnits: {
            type: Number,
            required: false
        },
        date: {
            type: Date,
            set: (value) => formattedDate(value),
            required: true
        },
        basePrice: {
            type: Number,
            required: true
        },
        basePriceIncrement: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        extraAdultMultiplier: {
            type: Number,
            required: true
        },
        extraChildMultiplier: {
            type: Number,
            required: true
        }
    }, {timestamps: true, strict: true}
)

RoomRateSchema.pre('save', async function (next) {
    try {
        if (!this.totalUnits) {
            this.totalUnits = await RoomUnit.countDocuments({roomTypeId: this.roomTypeId})
        }

        this.availableUnits = this.totalUnits - this.soldUnits
        next()
    } catch (err) {
        next(err)
    }
})

RoomRateSchema.pre('findOneAndUpdate', async function (next) {
    const update = this.getUpdate()
    const id = this.getQuery()._id

    try {
        const document = await this.model.findById(id)
        if (!document) return next()

        const totalUnits = update.totalUnits ?? document.totalUnits
        const soldUnits = update.soldUnits

        if (totalUnits && soldUnits > 0) {
            update.availableUnits = totalUnits - soldUnits
            this.setUpdate(update)
            next()
        }
    } catch (err) {
        next(err)
    }
})

module.exports = mongoose.model('roomRate', RoomRateSchema, 'roomRates')