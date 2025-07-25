const HTTPException = require('../../index')

class RoomUnitNotFoundException extends HTTPException {
    constructor(
        message = "No roomUnit found!",
        statusCode = 404,
        error = "No roomUnit found in this collection"
    ) {
        super(
            message,
            statusCode,
            error
        )
    }
}

module.exports = RoomUnitNotFoundException