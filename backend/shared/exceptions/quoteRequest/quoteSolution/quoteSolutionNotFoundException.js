const HTTPException = require('@exceptions/index')

class QuoteSolutionNotFoundException extends HTTPException {
    constructor(
        message = "No quoteSolution found!",
        statusCode = 404,
        error = "No quoteSolution found in this collection"
    ) {
        super(
            message,
            statusCode,
            error
        )
    }
}

module.exports = QuoteSolutionNotFoundException