const mongoose = require('mongoose')
const {formattedDate} = require("../../../shared/utils/dates");

const DocumentSchema = new mongoose.Schema(
    {
        guestId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'guest'
        },
        type: {
            type: String,
            required: true,
            enum: [ 'idCard', 'drivingLicense', 'passport' ]
        },
        number: {
            type: String,
            required: true
        },
        expireDate: {
            type: Date,
            set: (value) => formattedDate(value),
            required: true
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('document', DocumentSchema, 'documents')