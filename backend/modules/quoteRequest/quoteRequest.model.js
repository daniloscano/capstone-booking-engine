const mongoose = require('mongoose')
const { DateTime } = require('luxon')
const { formattedDate, calculateDaysStay, getExpireDate } = require('../../shared/utils/dates')

const QuoteRequestSchema = new mongoose.Schema(
    {
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
            required: true
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
            required: true
        },
        quoteSolutionsIds: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'quoteSolution'
            }
        ],
        isConfirmed: {
            type: Boolean,
            required: true,
            default: false
        },
        expire: {
            type: Date,
            set: (value) => getExpireDate(value),
            required: false
        },
        isExpired: {
            type: Boolean,
            required: true,
            default: false
        }
    }, { timestamps: true, strict: true }
)

QuoteRequestSchema.pre('save', function(next) {
    const quoteRequest = this

    if (!quoteRequest.checkIn || !quoteRequest.checkOut) {
        return next()
    }

    quoteRequest.daysStay = calculateDaysStay(quoteRequest.checkIn, quoteRequest.checkOut)

    const now = DateTime.now()
    quoteRequest.expire = now.plus({ days: 7 }).endOf('day')

    next()
})

QuoteRequestSchema.pre('findOneAndUpdate', async function(next) {
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

module.exports = mongoose.model('quoteRequest', QuoteRequestSchema, 'quoteRequests')