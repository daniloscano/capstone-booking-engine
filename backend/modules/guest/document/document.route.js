const express = require('express')
const documentController = require('./document.controller')

const document = express.Router()

document.get("/", documentController.getAllDocuments)
document.get("/:documentId", documentController.getDocumentById)
document.post("/create", documentController.createDocument)
document.patch("/:documentId/edit", documentController.updateDocumentById)
document.delete("/:documentId/delete", documentController.deleteDocumentById)

module.exports = document