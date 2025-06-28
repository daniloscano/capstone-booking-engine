const HTTPException = require('../../index')

class RoomAmenityNotFoundException extends HTTPException {
    constructor(
        message = "No roomAmenity found!",
        statusCode = 404,
        error = "No roomAmenity found in this collection"
    ) {
        super(
            message,
            statusCode,
            error
        )
    }
}

module.exports = RoomAmenityNotFoundException