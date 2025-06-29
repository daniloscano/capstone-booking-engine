const documentService = require('./document.service')
const DocumentNotFoundException = require('@guestExceptions/document/documentNotFoundException')

const getAllDocuments = async (req, res, next) => {
    const { page = 1, pageSize = 10 } = req.query

    try {
        const documents = await documentService.getAllDocuments(page, pageSize)

        if (documents.data.length === 0) {
            throw new DocumentNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    documents
                }
            )
    } catch (err) {
        next(err)
    }
}

const getDocumentById = async (req, res, next) => {
    const { documentId } = req.params

    try {
        const document = await documentService.getDocumentById(documentId)

        if (!document) {
            throw new DocumentNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    document
                }
            )
    } catch (err) {
        next(err)
    }
}

const createDocument = async (req, res, next) => {
    const documentData = req.body

    try {
        const document = await documentService.createDocument(documentData)

        res
            .status(201)
            .send(
                {
                    statusCode: 201,
                    message: `Document ${document._id} created successfully!`,
                    document
                }
            )
    } catch (err) {
        next(err)
    }
}

const updateDocumentById = async (req, res, next) => {
    const { documentId } = req.params
    const documentData = req.body

    try {
        const document = await documentService.updateDocumentById(documentId, documentData)

        if (!document) {
            throw new DocumentNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `Document ${document._id} updated successfully!`,
                    document
                }
            )
    } catch (err) {
        next(err)
    }
}

const deleteDocumentById = async (req, res, next) => {
    const { documentId } = req.params

    try {
        const document = await documentService.deleteDocumentById(documentId)

        if (!document) {
            throw new DocumentNotFoundException()
        }

        res
            .status(200)
            .send(
                {
                    statusCode: 200,
                    message: `Document ${document._id} deleted successfully!`,
                    document
                }
            )
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getAllDocuments,
    getDocumentById,
    createDocument,
    updateDocumentById,
    deleteDocumentById
}