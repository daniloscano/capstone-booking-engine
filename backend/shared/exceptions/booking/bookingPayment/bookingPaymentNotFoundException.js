const HTTPException = require('@exceptions/index')

class BookingPaymentNotFoundException extends HTTPException {
    constructor(
        message = "No bookingPayment found!",
        statusCode = 404,
        error = "No bookingPayment found in this collection"
    ) {
        super(
            message,
            statusCode,
            error
        )
    }
}

module.exports = BookingPaymentNotFoundException