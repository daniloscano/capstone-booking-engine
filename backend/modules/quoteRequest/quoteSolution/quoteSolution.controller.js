const quoteSolutionService = require('./quoteSolution.service')
const QuoteSolutionNotFoundException = require("@quoteRequestExceptions/quoteSolution/quoteSolutionNotFoundException")

const getAllQuoteSolutions = async (req, res, next) => {
    const { page = 1, pageSize = 10 } = req.query

    try {
        const quoteSolutions = await quoteSolutionService.getAllQuoteSolutions(page, pageSize)

        if (quoteSolutions.data.length === 0) {
            throw new QuoteSolutionNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    quoteSolutions
                }
            )
    } catch (err) {
        next(err)
    }
}

const getQuoteSolutionById = async (req, res, next) => {
    const { quoteSolutionId } = req.params

    try {
        const quoteSolution = await quoteSolutionService.getQuoteSolutionById(quoteSolutionId)

        if (!quoteSolution) {
            throw new QuoteSolutionNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    quoteSolution
                }
            )
    } catch (err) {
        next(err)
    }
}

const createQuoteSolution = async (req, res, next) => {
    const quoteSolutionData = req.body

    try {
        const quoteSolution = await quoteSolutionService.createQuoteSolution(quoteSolutionData)

        res
            .status(201)
            .send(
                {
                    statusCode: 201,
                    message: `QuoteSolution ${quoteSolution._id} created successfully!`,
                    quoteSolution
                }
            )
    } catch (err) {
        next(err)
    }
}

const updateQuoteSolutionById = async (req, res, next) => {
    const { quoteSolutionId } = req.params
    const quoteSolutionData = req.body

    try {
        const quoteSolution = await quoteSolutionService.updateQuoteSolutionById(quoteSolutionId, quoteSolutionData)

        if (!quoteSolution) {
            throw new QuoteSolutionNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `QuoteSolution ${quoteSolution._id} updated successfully!`,
                    quoteSolution
                }
            )
    } catch (err) {
        next(err)
    }
}

const deleteQuoteSolutionById = async (req, res, next) => {
    const { quoteSolutionId } = req.params

    try {
        const quoteSolution = await quoteSolutionService.deleteQuoteSolutionById(quoteSolutionId)

        if (!quoteSolution) {
            throw new QuoteSolutionNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `QuoteSolution ${quoteSolution._id} deleted successfully!`,
                    quoteSolution
                }
            )
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getAllQuoteSolutions,
    getQuoteSolutionById,
    createQuoteSolution,
    updateQuoteSolutionById,
    deleteQuoteSolutionById
}