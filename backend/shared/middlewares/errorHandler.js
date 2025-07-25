const mongoose = require('mongoose')
const HTTPException = require('../exceptions/index')

const errorHandler = (err, req, res, next) => {
    if (err.name === 'MongoServerError' && err.code === 11000) {
        const field = Object.keys(err.keyValue)[0]
        return res
            .status(409)
            .send(
                {
                    statusCode: 409,
                    message: `Duplicate value for ${field}!`,
                    error: `Value ${err.keyValue[field]} already used`
                }
            )
    }

    if (err instanceof HTTPException) {
        return res
            .status(err.statusCode)
            .send(
                {
                    statusCode: err.statusCode,
                    message: err.message,
                    error: err.error
                }
            )
    }

    process.env.NODE_ENV === 'dev' && console.error(err)
    res
        .status(500)
        .send(
            {
                statusCode: 500,
                message: 'Internal server error!',
                error: 'An error has occurred, please try again later or contact support team'
            }
        )
}

module.exports = errorHandler