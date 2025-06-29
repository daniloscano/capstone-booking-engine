const express = require('express')
const quoteSolutionController = require('./quoteSolution.controller')
const { createValidationRules, updateValidationRules, quoteSolutionValidator } = require('./quoteSolutionValidation')

const quoteSolution = express.Router()

quoteSolution.get("/", quoteSolutionController.getAllQuoteSolutions)
quoteSolution.get("/:quoteSolutionId", quoteSolutionController.getQuoteSolutionById)
quoteSolution.post("/create", [ createValidationRules, quoteSolutionValidator ], quoteSolutionController.createQuoteSolution)
quoteSolution.patch("/:quoteSolutionId/edit", [ updateValidationRules, quoteSolutionValidator ], quoteSolutionController.updateQuoteSolutionById)
quoteSolution.delete("/:quoteSolutionId/delete", quoteSolutionController.deleteQuoteSolutionById)

module.exports = quoteSolution