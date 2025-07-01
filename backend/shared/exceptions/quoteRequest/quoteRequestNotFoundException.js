const HTTPException = require('@exceptions/index')

class QuoteRequestNotFoundException extends HTTPException {
    constructor(
        message = "No quoteRequest found!",
        statusCode = 404,
        error = "No quoteRequest found in this collection"
    ) {
        super(
            message,
            statusCode,
            error
        )
    }
}

module.exports = QuoteRequestNotFoundException