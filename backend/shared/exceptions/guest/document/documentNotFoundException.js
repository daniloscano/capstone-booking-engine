const HTTPException = require('@exceptions/index')

class DocumentNotFoundException extends HTTPException {
    constructor(
        message = "No document found!",
        statusCode = 404,
        error = "No document found in this collection"
    ) {
        super(
            message,
            statusCode,
            error
        )
    }
}

module.exports = DocumentNotFoundException