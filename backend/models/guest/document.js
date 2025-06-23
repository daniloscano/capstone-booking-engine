const mongoose = require('mongoose')
const {formattedDate} = require("../../utils/daysStay");

const DocumentSchema = new mongoose.Schema(
    {
        guestId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'guest'
        },
        type: {
            type: String,
            required: true,
            enum: [ 'id card', 'driving license', 'passport' ]
        },
        number: {
            type: String,
            required: true
        },
        expireSate: {
            type: Date,
            set: (value) => formattedDate(value),
            required: true
        }
    }, { timestamps: true, strict: true }
)

module.exports = mongoose.model('document', DocumentSchema, 'documents')