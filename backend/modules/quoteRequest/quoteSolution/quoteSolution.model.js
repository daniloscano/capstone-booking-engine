const mongoose = require('mongoose')

const QuoteSolutionSchema = new mongoose.Schema(
    {
        quoteRequestId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'quote'
        },
        roomTypeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'roomType'
        },
        bookingPolicyId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'bookingPolicy'
        },
        price: {
            type: Number,
            required: true
        },
        isConfirmed: {
            type: Boolean,
            required: true,
            default: false
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('quoteSolution', QuoteSolutionSchema, 'quoteSolutions')