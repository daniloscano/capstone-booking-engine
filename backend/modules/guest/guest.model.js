const mongoose = require('mongoose')
const {formattedDate} = require("../../shared/utils/dates");

const GuestSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            max: 40
        },
        lastName: {
            type: String,
            required: true,
            max: 80
        },
        gender: {
            type: String,
            required: false,
            default: 'male',
            enum: [ 'male', 'female' ]
        },
        isMaster: {
            type: Boolean,
            required: true,
            default: false
        },
        bookingsIds: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'booking'
            }
        ],
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        addressId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'address'
        },
        dateOfBirth: {
            type: Date,
            set: (value) => formattedDate(value),
            required: true
        },
        documentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'document'
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('guest', GuestSchema, 'guests')