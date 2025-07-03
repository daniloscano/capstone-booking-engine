const checkAvailabilityService = require('./checkAvailability.service')

const checkAvailability = async (req, res, next) => {
    const quoteRequestData = req.body

    try {
        const quoteRequest = await checkAvailabilityService(quoteRequestData)

        res
            .status(201)
            .send(
                {
                    statusCode: 201,
                    message: `QuoteRequest ${quoteRequest._id} created successfully!`,
                    quoteRequest
                }
            )
    } catch (err) {
        next(err)
    }
}

module.exports = checkAvailability