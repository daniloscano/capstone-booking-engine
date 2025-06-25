const HTTPException = require('../../index')

class RoomTypeNotFoundException extends HTTPException {
    constructor(
        message = "No roomType found!",
        statusCode = 404,
        error = "No roomType found in this collection"
    ) {
        super(
            message,
            statusCode,
            error
        )
    }
}

module.exports = RoomTypeNotFoundException