const AncillarySchema = require('./ancillary.model')

const Pagination = require('@utils/pagination')
const pagination = new Pagination(AncillarySchema)

const getAllAncillaries = async (page, pageSize, filter, sort) => {
    return await pagination.getPaginatedData(page, pageSize, filter, sort)
}

const getAncillaryById = async (ancillaryId) => {
    return AncillarySchema.findById(ancillaryId)
}

const createAncillary = async (ancillaryData) => {
    const newAncillary = new AncillarySchema(ancillaryData)
    return await newAncillary.save()
}

const updateAncillaryById = async (ancillaryId, ancillaryData) => {
    return AncillarySchema.findByIdAndUpdate(ancillaryId, ancillaryData, { new: true })
}

const deleteAncillaryById = async (ancillaryId) => {
    return AncillarySchema.findByIdAndDelete(ancillaryId)
}

module.exports = {
    getAllAncillaries,
    getAncillaryById,
    createAncillary,
    updateAncillaryById,
    deleteAncillaryById
}