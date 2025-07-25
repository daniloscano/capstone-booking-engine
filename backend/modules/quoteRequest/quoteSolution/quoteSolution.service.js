const QuoteSolutionSchema = require('./quoteSolution.model')

const Pagination = require('@utils/pagination')
const pagination = new Pagination(QuoteSolutionSchema)

const fieldsToPopulate = [
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
            }
        ]
    },
    {
        path: 'policies.bookingPolicyId',
        select: 'code name deposit balance cancellation'
    }
]

const getAllQuoteSolutions = async (page, pageSize, filter, sort) => {
    return await pagination.getPaginatedData(page, pageSize, filter, sort, fieldsToPopulate)
}

const getQuoteSolutionById = async (quoteSolutionId) => {
    return QuoteSolutionSchema.findById(quoteSolutionId)
        .populate(fieldsToPopulate)
}

const createQuoteSolution = async (quoteSolutionData) => {
    const newQuoteSolution = new QuoteSolutionSchema(quoteSolutionData)
    return await newQuoteSolution.save()
}

const updateQuoteSolutionById = async (quoteSolutionId, quoteSolutionData) => {
    return QuoteSolutionSchema.findByIdAndUpdate(quoteSolutionId, quoteSolutionData, {new: true})
}

const deleteQuoteSolutionById = async (quoteSolutionId) => {
    return QuoteSolutionSchema.findByIdAndDelete(quoteSolutionId)
}

module.exports = {
    getAllQuoteSolutions,
    getQuoteSolutionById,
    createQuoteSolution,
    updateQuoteSolutionById,
    deleteQuoteSolutionById
}