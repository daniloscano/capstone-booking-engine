const mongoose = require('mongoose')
const { formattedDate } = require("../../utils/dates");

const BookingPaymentSchema = new mongoose.Schema(
    {
        bookingId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'booking'
        },
        type: {
            type: String,
            required: true,
            default: 'deposit',
            enum: [ 'deposit', 'balance' ]
        },
        amount: {
            type: Number,
            required: true
        },
        isCompleted: {
            type: Boolean,
            required: true,
            default: false
        },
        completedDate: {
            type: Date,
            set: (value) => formattedDate(value),
            required: true
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('bookingPayment', BookingPaymentSchema, 'bookingPayments')