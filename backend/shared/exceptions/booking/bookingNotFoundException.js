const HTTPException = require('@exceptions/index')

class BookingNotFoundException extends HTTPException {
    constructor(
        message = "No booking found!",
        statusCode = 404,
        error = "No booking found in this collection"
    ) {
        super(
            message,
            statusCode,
            error
        )
    }
}

module.exports = BookingNotFoundException