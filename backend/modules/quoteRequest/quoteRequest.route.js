const express = require('express')
const quoteRequestController = require('./quoteRequest.controller')

const quoteRequest = express.Router()

quoteRequest.get("/", quoteRequestController.getAllQuoteRequests)
quoteRequest.get("/:quoteRequestId", quoteRequestController.getQuoteRequestById)
quoteRequest.post("/create", quoteRequestController.createQuoteRequest)
quoteRequest.patch("/:quoteRequestId/edit", quoteRequestController.updateQuoteRequestById)
quoteRequest.delete("/:quoteRequestId/delete", quoteRequestController.deleteQuoteRequestById)

module.exports = quoteRequest