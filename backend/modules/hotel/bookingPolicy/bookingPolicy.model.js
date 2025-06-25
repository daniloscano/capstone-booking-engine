const mongoose = require('mongoose')

const BookingPolicySchema = new mongoose.Schema(
    {
        code: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        deposit: {
            type: String,
            required: true
        },
        balance: {
            type: String,
            required: true
        },
        cancellation: {
            type: String,
            required: true
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('bookingPolicy', BookingPolicySchema, 'bookingPolicies')