const HTTPException = require('../index')

class ExistingUserException extends HTTPException {
    constructor(
        message = "No user created",
        statusCode = 404,
        error = "User with this email already exists"
    ) {
        super(
            message,
            statusCode,
            error
        )
    }
}

module.exports = ExistingUserException