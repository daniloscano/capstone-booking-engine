const mongoose = require('mongoose')
const { formattedDate, calculateDaysStay } = require('../../utils/daysStay')

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
        }
    }, { timestamps: true, strict: true }
)

QuoteRequestSchema.pre('save', function(next) {
    const quoteRequest = this

    if (!quoteRequest.checkIn || !quoteRequest.checkOut) {
        return next()
    }

    quoteRequest.daysStay = calculateDaysStay(quoteRequest.checkOut, quoteRequest.checkIn)

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

        update.daysStay = calculateDaysStay(checkOut, checkIn)
        this.setUpdate(update)

        next()
    } catch (err) {
        next(err)
    }
})

module.exports = mongoose.model('quoteRequest', QuoteRequestSchema, 'quoteRequests')