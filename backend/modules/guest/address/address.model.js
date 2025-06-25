const mongoose = require('mongoose')

const AddressSchema = new mongoose.Schema(
    {
        guestId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'guest'
        },
        street: {
            type: String,
            required: true
        },
        zipCode: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        region: {
            type: String,
            required: true
        },
        nation: {
            type: String,
            required: true
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('address', AddressSchema, 'addresses')