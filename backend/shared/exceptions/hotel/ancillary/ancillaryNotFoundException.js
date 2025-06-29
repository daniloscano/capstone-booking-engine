const HTTPException = require('@exceptions/index')

class AncillaryNotFoundException extends HTTPException {
    constructor(
        message = "No ancillary found!",
        statusCode = 404,
        error = "No ancillary found in this collection"
    ) {
        super(
            message,
            statusCode,
            error
        )
    }
}

module.exports = AncillaryNotFoundException