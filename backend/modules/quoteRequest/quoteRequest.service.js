const QuoteRequestSchema = require('./quoteRequest.model')

const Pagination = require('@utils/pagination')
const pagination = new Pagination(QuoteRequestSchema)

const fieldsToPopulate = {
    path: 'quoteSolutionsIds',
    select: 'policies isConfirmed',
    populate: [
        {
            path: 'roomTypeId',
            select: 'name type category description dimensions images maxOccupancy hasCrib',
            populate: [
                {
                    path: 'bedsId',
                    select: 'king single crib'
                },
                {
                    path: 'amenitiesIds',
                    select: 'name icon'
                },
            ]
        },
        {
            path: 'policies.bookingPolicyId',
            select: 'code name deposit balance cancellation'
        }
    ]
}

const getAllQuoteRequests = async (page, pageSize, filter, sort) => {
    return await pagination.getPaginatedData(page, pageSize, filter, sort, fieldsToPopulate)
}

const getQuoteRequestById = async (quoteRequestId) => {
    return QuoteRequestSchema.findById(quoteRequestId)
        .populate(fieldsToPopulate)
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