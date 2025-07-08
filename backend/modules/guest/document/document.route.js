const express = require('express')
const documentController = require('./document.controller')
const { createValidationRules, updateValidationRules, documentValidator } = require('./documentValidation')
const authMiddleware = require("@authMiddlewares/auth")
const authorizedRoles = require('@authMiddlewares/role')

const document = express.Router()

document.get("/",
    authMiddleware,
    documentController.getAllDocuments
)
document.get("/:documentId",
    authMiddleware,
    documentController.getDocumentById
)
document.post("/create",
    authMiddleware,
    [ createValidationRules, documentValidator ],
    documentController.createDocument
)
document.patch("/:documentId/edit",
    authMiddleware,
    [ updateValidationRules, documentValidator ],
    documentController.updateDocumentById
)
document.delete("/:documentId/delete",
    authMiddleware,
    documentController.deleteDocumentById
)

module.exports = document