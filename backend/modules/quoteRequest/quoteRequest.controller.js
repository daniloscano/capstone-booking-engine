const quoteRequestService = require('./quoteRequest.service')
const QuoteRequestNotFoundException = require("@quoteRequestExceptions/quoteRequestNotFoundException")

const getAllQuoteRequests = async (req, res, next) => {
    const { page = 1, pageSize = 10 } = req.query

    try {
        const quoteRequests = await quoteRequestService.getAllQuoteRequests(page, pageSize)

        if (quoteRequests.data.length === 0) {
            throw new QuoteRequestNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    quoteRequests
                }
            )
    } catch (err) {
        next(err)
    }
}

const getQuoteRequestById = async (req, res, next) => {
    const { quoteRequestId } = req.params

    try {
        const quoteRequest = await quoteRequestService.getQuoteRequestById(quoteRequestId)

        if (!quoteRequest) {
            throw new QuoteRequestNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    quoteRequest
                }
            )
    } catch (err) {
        next(err)
    }
}

const createQuoteRequest = async (req, res, next) => {
    const quoteRequestData = req.body

    try {
        const quoteRequest = await quoteRequestService.createQuoteRequest(quoteRequestData)

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

const updateQuoteRequestById = async (req, res, next) => {
    const { quoteRequestId } = req.params
    const quoteRequestData = req.body

    try {
        const quoteRequest = await quoteRequestService.updateQuoteRequestById(quoteRequestId, quoteRequestData)

        if (!quoteRequest) {
            throw new QuoteRequestNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `QuoteRequest ${quoteRequest._id} updated successfully!`,
                    quoteRequest
                }
            )
    } catch (err) {
        next(err)
    }
}

const deleteQuoteRequestById = async (req, res, next) => {
    const { quoteRequestId } = req.params

    try {
        const quoteRequest = await quoteRequestService.deleteQuoteRequestById(quoteRequestId)

        if (!quoteRequest) {
            throw new QuoteRequestNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `QuoteRequest ${quoteRequest._id} deleted successfully!`,
                    quoteRequest
                }
            )
    } catch (err) {
        next()
    }
}

module.exports = {
    getAllQuoteRequests,
    getQuoteRequestById,
    createQuoteRequest,
    updateQuoteRequestById,
    deleteQuoteRequestById
}