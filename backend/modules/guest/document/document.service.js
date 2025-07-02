const DocumentSchema = require('./document.model')
const GuestSchema = require('../guest.model')

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
    const savedDocument = await newDocument.save()

    await GuestSchema.findByIdAndUpdate({ _id: documentData.guestId }, { documentId: savedDocument._id })

    return savedDocument
}

const updateDocumentById = async (documentId, documentData) => {
    return DocumentSchema.findByIdAndUpdate(documentId, documentData, { new: true })
}

const deleteDocumentById = async (documentId) => {
    const document = await DocumentSchema.findByIdAndDelete(documentId)

    await GuestSchema.findByIdAndUpdate({ _id: document.guestId }, { $unset: { documentId: '' } })

    return document
}

module.exports = {
    getAllDocuments,
    getDocumentById,
    createDocument,
    updateDocumentById,
    deleteDocumentById
}

