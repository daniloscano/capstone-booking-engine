const express = require('express')
const quoteSolutionController = require('./quoteSolution.controller')

const quoteSolution = express.Router()

quoteSolution.get("/", quoteSolutionController.getAllQuoteSolutions)
quoteSolution.get("/:quoteSolutionId", quoteSolutionController.getQuoteSolutionById)
quoteSolution.post("/create", quoteSolutionController.createQuoteSolution)
quoteSolution.patch("/:quoteSolutionId/edit", quoteSolutionController.updateQuoteSolutionById)
quoteSolution.delete("/:quoteSolutionId/delete", quoteSolutionController.deleteQuoteSolutionById)

module.exports = quoteSolution