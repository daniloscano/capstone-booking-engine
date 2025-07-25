const HTTPException = require('../../index')

class RoomRateNotFoundException extends HTTPException {
    constructor(
        message = "No roomRate found!",
        statusCode = 404,
        error = "No roomRate found in this collection"
    ) {
        super(
            message,
            statusCode,
            error
        )
    }
}

module.exports = RoomRateNotFoundException