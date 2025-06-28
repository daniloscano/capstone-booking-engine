const HTTPException = require('../index')

class GuestNotFoundException extends HTTPException {
    constructor(
        message = "No guest found!",
        statusCode = 404,
        error = "No guest found in this collection"
    ) {
        super(
            message,
            statusCode,
            error
        )
    }
}

module.exports = GuestNotFoundException