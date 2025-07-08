const express = require('express')
const quoteSolutionController = require('./quoteSolution.controller')
const { createValidationRules, updateValidationRules, quoteSolutionValidator } = require('./quoteSolution.validation')
const authMiddleware = require("@authMiddlewares/auth")
const authorizedRoles = require('@authMiddlewares/role')

const quoteSolution = express.Router()

quoteSolution.get("/",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    quoteSolutionController.getAllQuoteSolutions
)
quoteSolution.get("/:quoteSolutionId",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    quoteSolutionController.getQuoteSolutionById
)
quoteSolution.post("/create",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    [ createValidationRules, quoteSolutionValidator ],
    quoteSolutionController.createQuoteSolution
)
quoteSolution.patch("/:quoteSolutionId/edit",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    [ updateValidationRules, quoteSolutionValidator ],
    quoteSolutionController.updateQuoteSolutionById
)
quoteSolution.delete("/:quoteSolutionId/delete",
    authMiddleware,
    authorizedRoles('admin', 'manager', 'operator'),
    quoteSolutionController.deleteQuoteSolutionById
)

module.exports = quoteSolution