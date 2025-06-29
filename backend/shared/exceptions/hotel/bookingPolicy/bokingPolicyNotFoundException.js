const HTTPException = require('@exceptions/index')

class BookingPolicyNotFoundException extends HTTPException {
    constructor(
        message = "No bookingPolicy found!",
        statusCode = 404,
        error = "No bookingPolicy found in this collection"
    ) {
        super(
            message,
            statusCode,
            error
        )
    }
}

module.exports = BookingPolicyNotFoundException