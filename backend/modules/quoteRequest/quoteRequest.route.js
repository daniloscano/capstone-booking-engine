const express = require('express')
const quoteRequestController = require('./quoteRequest.controller')
const { createValidationRules, updateValidationRules, quoteRequestValidator } = require('./quoteRequest.validation')
const authMiddleware = require("@authMiddlewares/auth")
const authorizedRoles = require('@authMiddlewares/role')

const quoteRequest = express.Router()

quoteRequest.get("/",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    quoteRequestController.getAllQuoteRequests
)
quoteRequest.get("/:quoteRequestId",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    quoteRequestController.getQuoteRequestById
)
quoteRequest.post("/create",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    [ createValidationRules, quoteRequestValidator ], quoteRequestController.createQuoteRequest
)
quoteRequest.patch("/:quoteRequestId/edit",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    [ updateValidationRules, quoteRequestValidator ], quoteRequestController.updateQuoteRequestById
)
quoteRequest.delete("/:quoteRequestId/delete",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    quoteRequestController.deleteQuoteRequestById
)

module.exports = quoteRequest