const HTTPException = require('@exceptions/index')

class AddressNotFoundException extends HTTPException {
    constructor(
        message = "No address found!",
        statusCode = 404,
        error = "No address found in this collection"
    ) {
        super(
            message,
            statusCode,
            error
        )
    }
}

module.exports = AddressNotFoundException