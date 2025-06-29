const QuoteSolutionSchema = require('./quoteSolution.model')

const Pagination = require('@utils/pagination')
const pagination = new Pagination(QuoteSolutionSchema)

const getAllQuoteSolutions = async (page, pageSize, filter, sort) => {
    return await pagination.getPaginatedData(page, pageSize, filter, sort)
}

const getQuoteSolutionById = async (quoteSolutionId) => {
    return QuoteSolutionSchema.findById(quoteSolutionId)
}

const createQuoteSolution = async (quoteSolutionData) => {
    const newQuoteSolution = new QuoteSolutionSchema(quoteSolutionData)
    return await newQuoteSolution.save()
}

const updateQuoteSolutionById = async (quoteSolutionId, quoteSolutionData) => {
    return QuoteSolutionSchema.findByIdAndUpdate(quoteSolutionId, quoteSolutionData, { new: true })
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