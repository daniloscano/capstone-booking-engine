const mongoose = require('mongoose')
const { formattedDate, calculateDaysStay } = require('@utils/dates')

const BookingSchema = new mongoose.Schema(
    {
        quoteRequestId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'quoteRequest'
        },
        masterGuestId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'guest'
        },
        guestsIds: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'guest'
            }
        ],
        roomId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'roomUnit'
        },
        checkIn: {
            type: Date,
            set: (value) => formattedDate(value),
            required: true
        },
        checkOut: {
            type: Date,
            set: (value) => formattedDate(value),
            required: true
        },
        daysStay: {
            type: Number,
            required: false
        },
        adults: {
            type: Number,
            required: true
        },
        children: {
            type: Number,
            required: true
        },
        hasInfant: {
            type: Boolean,
            required: true,
            default: false
        },
        policyId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'bookingPolicy'
        },
        price: {
            type: Number,
            required: true
        },
        ancillariesIds: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ancillary'
            }
        ],
        ancillariesPrice: {
            type: Number,
            required: true
        },
        totalPrice: {
            type: Number,
            required: true
        },
        stage: {
            type: String,
            required: true,
            default: 'waiting for deposit',
            enum: [ 'waitingForDeposit', 'waitingForBalance', 'confirmed', 'canceled' ]
        },
        paymentsIds: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'bookingPayment'
            }
        ]
    }, { timestamps: true, strict: true }
)

BookingSchema.pre('save', function(next) {
    const booking = this

    if (!booking.checkIn || !booking.checkOut) {
        return next()
    }

    booking.daysStay = calculateDaysStay(booking.checkIn, booking.checkOut)

    next()
})

BookingSchema.pre('findOneAndUpdate', async function(next) {
    const update = this.getUpdate()
    const id = this.getQuery()._id

    try {
        const document = await this.model.findById(id)
        if (!document) return next()

        const checkIn = update.checkIn ?? document.checkIn
        const checkOut = update.checkOut ?? document.checkOut

        update.daysStay = calculateDaysStay(checkIn, checkOut)
        this.setUpdate(update)

        next()
    } catch (err) {
        next(err)
    }
})

module.exports = mongoose.model('booking', BookingSchema, 'bookings')