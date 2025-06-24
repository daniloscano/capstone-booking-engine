const HTTPException = require('../index')

class UserNotFoundException extends HTTPException {
    constructor(
        message = "No user found!",
        statusCode = 404,
        error: "No user found in this collection"
    ) {
        super(
            message,
            statusCode,
            error
        )
    }
}

module.exports = UserNotFoundException