const DocumentSchema = require('./document.model')

const Pagination = require('@utils/pagination')
const pagination = new Pagination(DocumentSchema)

const getAllDocuments = async (page, pageSize, filter, sort) => {
    return await pagination.getPaginatedData(page, pageSize, filter, sort)
}

const getDocumentById = async (documentId) => {
    return DocumentSchema.findById(documentId)
}

const createDocument = async (documentData) => {
    const newDocument = new DocumentSchema(documentData)
    return await newDocument.save()
}

const updateDocumentById = async (documentId, documentData) => {
    return DocumentSchema.findByIdAndUpdate(documentId, documentData, { new: true })
}

const deleteDocumentById = async (documentId) => {
    return DocumentSchema.findByIdAndDelete(documentId)
}

module.exports = {
    getAllDocuments,
    getDocumentById,
    createDocument,
    updateDocumentById,
    deleteDocumentById
}

