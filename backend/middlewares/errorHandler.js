const mongoose = require('mongoose')

const errorHandler = (err, req, res, next) => {
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