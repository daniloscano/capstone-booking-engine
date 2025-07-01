const QuoteRequestSchema = require('./quoteRequest.model')

const Pagination = require('@utils/pagination')
const pagination = new Pagination(QuoteRequestSchema)

const getAllQuoteRequests = async (page, pageSize, filter, sort) => {
    return await pagination.getPaginatedData(page, pageSize, filter, sort)
}

const getQuoteRequestById = async (quoteRequestId) => {
    return QuoteRequestSchema.findById(quoteRequestId)
}

const createQuoteRequest = async (quoteRequestData) => {
    const newQuoteRequest = new QuoteRequestSchema(quoteRequestData)
    return await newQuoteRequest.save()
}

const updateQuoteRequestById = async (quoteRequestId, quoteRequestData) => {
    return QuoteRequestSchema.findByIdAndUpdate(quoteRequestId, quoteRequestData, { new: true })
}

const deleteQuoteRequestById = async (quoteRequestId) => {
    return QuoteRequestSchema.findByIdAndDelete(quoteRequestId)
}

module.exports = {
    getAllQuoteRequests,
    getQuoteRequestById,
    createQuoteRequest,
    updateQuoteRequestById,
    deleteQuoteRequestById
}