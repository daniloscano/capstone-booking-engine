const express = require('express')
const quoteRequestController = require('./quoteRequest.controller')
const { createValidationRules, updateValidationRules, quoteRequestValidator } = require('./quoteRequestValidation')

const quoteRequest = express.Router()

quoteRequest.get("/", quoteRequestController.getAllQuoteRequests)
quoteRequest.get("/:quoteRequestId", quoteRequestController.getQuoteRequestById)
quoteRequest.post("/create", [ createValidationRules, quoteRequestValidator ], quoteRequestController.createQuoteRequest)
quoteRequest.patch("/:quoteRequestId/edit", [ updateValidationRules, quoteRequestValidator ], quoteRequestController.updateQuoteRequestById)
quoteRequest.delete("/:quoteRequestId/delete", quoteRequestController.deleteQuoteRequestById)

module.exports = quoteRequest