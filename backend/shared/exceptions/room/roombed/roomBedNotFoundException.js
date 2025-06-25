const HTTPException = require('../../index')

class RoomBedNotFoundException extends HTTPException {
    constructor(
        message = "No roomBed found!",
        statusCode = 404,
        error = "No roomBed found in this collection"
    ) {
        super(
            message,
            statusCode,
            error
        )
    }
}

module.exports = RoomBedNotFoundException