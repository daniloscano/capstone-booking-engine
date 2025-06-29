const express = require('express')
const documentController = require('./document.controller')
const { createValidationRules, updateValidationRules, documentValidator } = require('./documentValidation')

const document = express.Router()

document.get("/", documentController.getAllDocuments)
document.get("/:documentId", documentController.getDocumentById)
document.post("/create", [ createValidationRules, documentValidator ], documentController.createDocument)
document.patch("/:documentId/edit", [ updateValidationRules, documentValidator ], documentController.updateDocumentById)
document.delete("/:documentId/delete", documentController.deleteDocumentById)

module.exports = document