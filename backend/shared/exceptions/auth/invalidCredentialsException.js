const HTTPException = require('@exceptions/index')

class InvalidCredentialsException extends HTTPException {
    constructor(
        message = "Invalid credentials!",
        statusCode = 404,
        error = "Email or password provided are not valid"
    ) {
        super(
            message,
            statusCode,
            error
        )
    }
}

module.exports = InvalidCredentialsException